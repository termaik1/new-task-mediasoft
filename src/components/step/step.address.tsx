import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { useMobile } from "app/hooks/use.mobile.hook";

import { Card } from "app/ui-kit/card";
import { Button } from "app/ui-kit/button";

import styles from "./styles";
import stylesApp from "app/config/theme";

type TProps<T> = {
  onNextStep: () => void;
  renderMap: (mapProps: T) => React.ReactNode;
  mapProps: T;
};

const StepAddress = <T extends Record<string, unknown>>({
  onNextStep,
  renderMap,
  mapProps,
}: TProps<T>) => {
  const { isMobile } = useMobile();
  const classes = styles();
  const classesApp = stylesApp({ isMobile });

  const onSubmit = () => {
    onNextStep();
  };

  return (
    <Card className={classes.root}>
      {renderMap(mapProps)}
      <Box sx={{ mt: 4 }}>
        <Grid container justifyContent="center">
          <Button
            className={classesApp.captionText}
            onClick={onSubmit}
            theme="blue"
          >
            Оформить покупку
          </Button>
        </Grid>
      </Box>
    </Card>
  );
};

export default StepAddress;
