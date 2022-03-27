import React, { FC, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useMobile } from "app/hooks/use.mobile.hook";

import { BankingCard } from "app/ui-kit/banking/banking.card";
import { Card } from "app/ui-kit/card";
import { Button } from "app/ui-kit/button";
import { Input } from "app/ui-kit/input";
import { MaskMonthYear } from "app/ui-kit/mask/mask.month.year";
import { BackingMaskCardNumber } from "app/ui-kit/banking/backing.mask.card.number";

import styles from "./styles";
import stylesApp from "app/config/theme";

const defaultValues = {
  сardNumber: 0,
  cardOwner: "",
  expires: "",
  cvv: 0,
};

const schema = yup.object().shape({
  сardNumber: yup
    .string()
    .min(16, "не полностью заполнено")
    .required("обязателен к заполнению"),
  cardOwner: yup.string().required("обязателен к заполнению"),
  expires: yup
    .string()
    .matches(/\d/, "не полностью заполнено")
    .required("обязателен к заполнению"),
  cvv: yup
    .string()
    .min(3, "не полностью заполнено")
    .max(3, "максимум 3 символа")
    .required("обязателен к заполнению"),
});

type TDefaultValues = typeof defaultValues;

type TProps = {
  onNextStep: (result: TDefaultValues) => void;
};

const StepBankCard: FC<TProps> = ({ onNextStep }) => {
  const { isMobile } = useMobile();
  const classes = styles();
  const classesApp = stylesApp({ isMobile });
  const [isCvv, setIsCvv] = useState(false);
  const [resultData, setResultData] = useState<TDefaultValues>(defaultValues);

  const toggleIsCvv = () => setIsCvv((isPrev) => !isPrev);

  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const subscription = watch(
      ({ cardOwner = "", cvv = 0, expires = "", сardNumber = 0 }) =>
        setResultData({ cardOwner, cvv, expires, сardNumber })
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: TDefaultValues) => {
    onNextStep(data);
  };

  const { сardNumber, cardOwner, expires, cvv } = resultData;

  const isDisabled = !сardNumber || !cardOwner || !expires || !cvv;

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center">
          <BankingCard
            сardNumber={сardNumber}
            cardOwner={cardOwner}
            expires={expires}
            cvv={cvv}
            isCvv={isCvv}
          />
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Controller
            render={({ field }) => (
              <Input
                className={classesApp.smallText}
                label="Номер карты"
                errorMessage={errors?.сardNumber?.message}
                {...field}
                InputProps={{
                  inputComponent: BackingMaskCardNumber
                }}
              />
            )}
            name="сardNumber"
            control={control}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Controller
            render={({ field }) => (
              <Input
                className={classesApp.smallText}
                label="Владелец карты"
                errorMessage={errors?.cardOwner?.message}
                {...field}
              />
            )}
            name="cardOwner"
            control={control}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container justifyContent="space-between">
            <Controller
              render={({ field }) => (
                <Input
                  errorMessage={errors?.expires?.message}
                  className={`${classesApp.smallText} ${classes.formRowForm}`}
                  label="Срок действия"
                  {...field}
                  InputProps={{
                    inputComponent: MaskMonthYear,
                  }}
                />
              )}
              name="expires"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  className={`${classesApp.smallText} ${classes.formRowForm}`}
                  label="cvv"
                  onFocus={toggleIsCvv}
                  onBlur={toggleIsCvv}
                  errorMessage={errors?.cvv?.message}
                />
              )}
              name="cvv"
              control={control}
            />
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container justifyContent="center">
            <Button
              className={classesApp.captionText}
              theme="blue"
              type="submit"
              disabled={isDisabled}
            >
              Следующий пункт
            </Button>
          </Grid>
        </Box>
      </form>
    </Card>
  );
};

export default StepBankCard;
