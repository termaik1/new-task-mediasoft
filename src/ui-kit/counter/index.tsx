import React, { FC } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  count: number;
  onDelete: (value: number) => void;
  onAdd: (value: number) => void;
  className?: string;
};

export const Counter: FC<TProps> = ({
  count,
  onDelete,
  onAdd,
  className = "",
}) => {
  const { isMobile } = useMobile();
  const classes = styles();
  const classesApp = stylesApp({ isMobile });

  return (
    <Grid
      className={`${classes.root} ${className}`}
      container
      justifyContent="space-between"
    >
      <RemoveIcon
        className={classes.icon}
        onClick={() => onDelete(count - 1)}
      />
      <div className={`${classes.value} ${classesApp.smallText}`}>{count}</div>
      <AddIcon className={classes.icon} onClick={() => onAdd(count + 1)} />
    </Grid>
  );
};
