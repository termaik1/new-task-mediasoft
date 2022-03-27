import React from "react";

import InputMask from "react-input-mask";

import styles from "./styles";

export const MaskPhone = (props) => {
  const classes = styles();

  return (
    <InputMask
      className={classes.root}
      mask={"+7 (999) 999-99-99"}
      {...props}
    />
  );
};
