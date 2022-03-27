import React from "react";

import InputMask from "react-input-mask";

import styles from "./styles";

export const MaskMonthYear = (props) => {
  const classes = styles();

  return (
    <InputMask
      className={classes.root}
      mask={"99/9999"}
      {...props}
    />
  );
};
