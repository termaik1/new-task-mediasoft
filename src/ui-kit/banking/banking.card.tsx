import React, { FC, useEffect, useState } from "react";
import cn from "classnames";

import { useMobile } from "app/hooks/use.mobile.hook";
import { useDebounced } from "app/hooks/use.debounced.hook";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { BankingLabel } from "./backing.label";

import styles from "./styles";

import bankCardIcon from "app/assets/jpeg/bank_card.jpeg";

type TProps = {
  сardNumber: number | string;
  cardOwner: string;
  expires: string;
  cvv: number | string;
  isCvv: boolean;
};

export const BankingCard: FC<TProps> = ({
  сardNumber,
  cardOwner,
  expires,
  isCvv,
  cvv,
}) => {
  const { isMobile375 } = useMobile();
  const classes = styles({ isMobile375 });
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    setIsAnimation(true);
  }, [isCvv]);

  useDebounced(
    () => {
      isAnimation && setIsAnimation(false);
    },
    500,
    [isAnimation]
  );

  return (
    <div className={classes.root}>
      <div
        className={cn(classes.imgHolder, { [classes.animation]: isAnimation })}
      >
        <img className={classes.img} src={bankCardIcon} />
      </div>
      {isCvv ? (
        <Box sx={{ mt: 6 }}>
          <Grid container>
            <BankingLabel label="Код карты cvv">
              {cvv ? cvv : "cvv"}
            </BankingLabel>
          </Grid>
        </Box>
      ) : (
        <>
          <Grid container>
            <BankingLabel label="Номер карты">
              {сardNumber ? сardNumber : "#### #### #### ####"}
            </BankingLabel>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Grid container justifyContent="space-between" wrap="nowrap">
              <BankingLabel label="Держатель карты">
                {cardOwner ? cardOwner : "FULL NAME"}
              </BankingLabel>
              <BankingLabel label="Срок действия">
                {expires ? expires : "ММ/ГГ"}
              </BankingLabel>
            </Grid>
          </Box>
        </>
      )}
    </div>
  );
};
