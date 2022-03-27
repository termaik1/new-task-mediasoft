import React from "react";

import loaderIcon from "app/assets/svg/loader.icon.svg";

import styles from "./styles";

export const Loader = () => {
  const classes = styles();

  return <div className={ classes.root }>
  <div className={ classes.animation }>
    <img src={ loaderIcon } alt="loader" />
  </div>
</div>
};
