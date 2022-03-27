import React, { FC, useEffect, useState } from "react";

import flow from "lodash.flow";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useMobile } from "app/hooks/use.mobile.hook";

import { CartService, TCartServiceProps } from "app/services/cart.service";
import { OrderService, TOrderServiceProps } from "app/services/order.service";

import StepInfo from "app/components/step/step.info";
import StepBuyer from "app/components/step/step.buyer";
import StepBankCard from "app/components/step/step.bank.card";
import StepAddress from "app/components/step/step.address";
import Map, { TMapProps } from "app/components/map";
import Plug from "app/components/plug";

import stylesApp from "app/config/theme";

type TProps = {
  orderService: TOrderServiceProps;
  cartService: TCartServiceProps;
};

const Order: FC<TProps> = ({ orderService, cartService }) => {
  const { steps, actions: orderActions } = orderService;
  const { actions: cartActions } = cartService;

  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });

  const [activeStep, setActiveStep] = useState(0);
  const [coordinate, setCoordinate] = useState<[number, number] | null>(null);

  useEffect(() => {
    return () => {
      orderActions.resetSteps();
    };
  }, []);

  const onNextStep = <T extends Record<string, unknown>>(result: T) => {
    const index = activeStep + 1;
    orderActions.nextStepItem({ ...steps[index], index });
    orderActions.setStepResult<T>(result);
    setActiveStep((prev) => prev + 1);
  };

  const onSubmitResult = () => {
    if (!!coordinate) {
      setActiveStep(3);
      cartActions.resetData();
    }
  };

  const onPlacemark: TMapProps["onPlacemark"] = (values) => {
    setCoordinate(values);
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return <StepBuyer onNextStep={onNextStep} />;
      case 1:
        return <StepBankCard onNextStep={onNextStep} />;
      case 2:
        return (
          <StepAddress<TMapProps>
            onNextStep={onSubmitResult}
            renderMap={(props) => <Map {...props} />}
            mapProps={{
              onPlacemark,
            }}
          />
        );
      case 3:
        return <Plug>Заказ начал формироваться</Plug>;
      default:
        return null;
    }
  };

  return (
    <div className={`${classesApp.box} ${classesApp.indent}`}>
      <Grid container justifyContent="center">
        <StepInfo steps={steps} />
      </Grid>
      <Box sx={{ mt: isMobile ? 4 : 6 }}>
        <Grid container justifyContent="center">
          {renderForm()}
        </Grid>
      </Box>
    </div>
  );
};

export default flow([OrderService, CartService])(Order);
