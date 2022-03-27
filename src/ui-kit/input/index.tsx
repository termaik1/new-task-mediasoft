import React, { FC, forwardRef } from "react";

import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { useMobile } from "app/hooks/use.mobile.hook";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = TextFieldProps & {
  errorMessage?: string;
  className?: string;
};

export const Input: FC<TProps> = forwardRef(
  ({ errorMessage, className = "", value = "", ...rest }) => {
    const { isMobile } = useMobile();
    const classesApp = stylesApp({ isMobile });
    const classes = styles();

    return (
      <Grid className={className} container direction="column">
        <TextField value={!!value ? value : ""} {...rest} />
        {errorMessage && (
          <span className={`${classesApp.captionText} ${classes.error}`}>
            {errorMessage}
          </span>
        )}
      </Grid>
    );
  }
);
