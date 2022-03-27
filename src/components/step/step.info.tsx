import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";

import { useMobile } from "app/hooks/use.mobile.hook";
import { StepItem } from "app/entities/order/order.models";

import { Step } from "app/ui-kit/step";
import { Card } from "app/ui-kit/card";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  steps: StepItem[];
};

const StepInfo: FC<TProps> = ({ steps }) => {
  const { isMobile } = useMobile();
  const classes = styles();
  const classesApp = stylesApp({ isMobile });

  return (
    <Card className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <div className={classesApp.smallText}>Шаги оформления</div>
        <Grid container justifyContent="space-between">
          {steps.map(({ title, isActive, isPassed }) => (
            <Step
              key={title}
              className={classes.stepInfoItem}
              isActive={isActive}
              isPassed={isPassed}
            >
              {title}
            </Step>
          ))}
        </Grid>
      </Grid>
    </Card>
  );
};

export default StepInfo;
