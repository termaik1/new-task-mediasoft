import React, { FC } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { IGoodsItem } from "app/entities/cart/cart.models";

import { Card } from "app/ui-kit/card";
import { Counter } from "app/ui-kit/counter";
import { Button } from "app/ui-kit/button";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import stylesApp from "app/config/theme";
import styles from "./styles";

interface IProps extends Pick<IGoodsItem, "img" | "count" | "price"> {
  onDeleteCart: () => void;
  onAddCart: () => void;
  onDeleteId: () => void;
  className?: string;
}

const Goods: FC<IProps> = ({
  img,
  count,
  price,
  onDeleteCart,
  onAddCart,
  onDeleteId,
  className = "",
}) => {
  const { isMobile, isMobile375 } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles({ isMobile, isMobile375 });

  const renderBntDelete = (
    <Button className={classesApp.helperTeg} theme="blue" onClick={onDeleteId}>
      Удалить&nbsp;
      <DeleteForeverIcon />
    </Button>
  );

  const indentBoxMt = isMobile ? 1 : 3;

  return (
    <Card className={`${classes.root} ${className}`}>
      <Grid
        container
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        wrap="wrap-reverse"
      >
        <div className={classes.info}>
          <Counter count={count} onDelete={onDeleteCart} onAdd={onAddCart} />
          <Box className={classesApp.smallText} sx={{ mt: indentBoxMt }}>
            Ценна: {count * price}
          </Box>
          {isMobile && <Box sx={{ mt: indentBoxMt }}>{renderBntDelete}</Box>}
        </div>
        <Grid container={isMobile} item={!isMobile} justifyContent="center">
          <img className={classes.img} src={img} alt="goods_item_icon" />
        </Grid>
      </Grid>
      {!isMobile && (
        <Box sx={{ mt: indentBoxMt }}>
          <Grid container justifyContent="center">
            {renderBntDelete}
          </Grid>
        </Box>
      )}
    </Card>
  );
};

export default Goods;
