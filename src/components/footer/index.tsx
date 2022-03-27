import React from "react";

import Grid from "@material-ui/core/Grid";

import styles from "./styles";

const Footer = () => {
  const classes = styles();

  return (
    <footer className={classes.root}>
      <Grid container justifyContent="center">
        Разработано в 2022
      </Grid>
    </footer>
  );
};

export default Footer;
