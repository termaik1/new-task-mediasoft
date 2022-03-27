import React, {FC} from "react";
import { useForm, Controller, useFormState } from "react-hook-form";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useMobile } from "app/hooks/use.mobile.hook";

import { Card } from "app/ui-kit/card";
import { Input } from "app/ui-kit/input";
import { Button } from "app/ui-kit/button";
import { MaskPhone } from "app/ui-kit/mask/mask.phone";

import styles from "./styles";
import stylesApp from "app/config/theme";

const defaultValues = {
  username: "",
  phone: "",
  description: "",
};

type TDefaultValues = typeof defaultValues

type TProps = {
  onNextStep: (result: TDefaultValues) => void
}

const StepBuyer: FC<TProps> = ({ onNextStep }) => {
  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();

  const { handleSubmit, control } = useForm({ defaultValues });

  const {
    dirtyFields: { username = false, phone = false },
  } = useFormState({ control });

  const onSubmit = (data: TDefaultValues) => {
    onNextStep(data)
  };

  const isDisabled = !username || !phone;

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" alignItems="flex-start">
          <Controller
            render={({ field }) => (
              <Input
                className={classesApp.smallText}
                label="Ваше имя"
                {...field}
              />
            )}
            name="username"
            control={control}
          />
          <Box sx={{ mt: 2 }}>
            <Controller
              render={({ field }) => (
                <Input
                  className={classesApp.smallText}
                  type="text"
                  placeholder="Телефон"
                  {...field}
                  InputProps={{
                    inputComponent: MaskPhone,
                  }}
                />
              )}
              name="phone"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Controller
              render={({ field }) => (
                <Input
                  className={classesApp.smallText}
                  type="text"
                  label="Доп информация"
                  multiline
                  rows={5}
                  {...field}
                />
              )}
              name="description"
              control={control}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              className={classesApp.captionText}
              type="submit"
              theme="blue"
              disabled={isDisabled}
            >
              Следующий пункт
            </Button>
          </Box>
        </Grid>
      </form>
    </Card>
  );
};

export default StepBuyer;
