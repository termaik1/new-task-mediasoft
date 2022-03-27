import React, { FC } from "react";

import Grid from "@material-ui/core/Grid";

import { useMobile } from "app/hooks/use.mobile.hook";

import { TFilterItem } from "app/models/filter.model";

import { Card } from "app/ui-kit/card";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  list: TFilterItem[];
  onChangeFilterItem: (item: TFilterItem) => void;
};

const Filters: FC<TProps> = ({ list = [], onChangeFilterItem = () => {} }) => {
  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();

  return (
    <Card className={classes.root}>
      <Grid container justifyContent="center">
        {list.map(({ title, sort, entityName }) => (
          <Grid
            key={`${entityName}_${title}`}
            item
            className={classes.item}
            onClick={() =>
              onChangeFilterItem({
                entityName,
                title,
                sort: sort === "asc" ? "desc" : "asc",
              })
            }
          >
            <span className={classesApp.smallText}>{title}</span>
            {sort === "asc" ? (
              <ExpandLessIcon className={classes.icon} />
            ) : (
              <ExpandMoreIcon className={classes.icon} />
            )}
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Filters;
