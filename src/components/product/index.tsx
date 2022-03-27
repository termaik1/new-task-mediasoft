import React, { FC } from "react";

import { Grid } from "@material-ui/core";

import { useMobile } from "app/hooks/use.mobile.hook";
import { TProductItem } from "app/entities/product/product.models";

import { Card } from "app/ui-kit/card";
import { Button } from "app/ui-kit/button";
import { Counter } from "app/ui-kit/counter";

import stylesApp from "app/config/theme";
import styles from "./styles";

interface IProps extends Pick<TProductItem, "img" | "price" | "name"> {
  onModal: () => void;
  onDeleteCart: () => void;
  onAddCart: () => void;
  count: number;
  className?: string;
}

const Product: FC<IProps> = ({
  className = "",
  onModal,
  onDeleteCart,
  onAddCart,
  count = 0,
  img,
  price,
  name,
}) => {
  const { isMobile } = useMobile();

  const classesApp = stylesApp({ isMobile });
  const classes = styles();

  return (
    <Card className={`${classes.root} ${className}`}>
      <Grid className={classesApp.largeText} container justifyContent="center">
        {name}
      </Grid>
      <Grid className={classes.indent} container justifyContent="center">
        <img
          className={classes.img}
          src={img}
          alt="product_icon"
          onClick={onModal}
        />
      </Grid>
      <Grid
        className={classes.indent}
        container
        direction="column"
        alignItems="center"
      >
        <div className={classesApp.smallText}>цена: {price}</div>
      </Grid>
      <Grid className={classes.buttonForm} container justifyContent="flex-end">
        {!!count ? (
          <Counter count={count} onAdd={onAddCart} onDelete={onDeleteCart} />
        ) : (
          <Button className={classesApp.captionText} onClick={onAddCart}>
            В корзину
          </Button>
        )}
      </Grid>
    </Card>
  );
};

export default Product;
