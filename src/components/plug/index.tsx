import React, { FC } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import Grid from "@material-ui/core/Grid";

import { Card } from "app/ui-kit/card";

import stylesApp from "app/config/theme";
import styles from "./styles";

const Plug: FC = ({ children }) => {
  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();

  return (
    <Grid container justifyContent="center">
      <Card className={`${classes.content} ${classesApp.largeText}`}>{children}</Card>
    </Grid>
  );
};

export default Plug;
