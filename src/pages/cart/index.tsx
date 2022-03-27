import React, { FC, useCallback, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useMobile } from "app/hooks/use.mobile.hook";

import { CartService, TCartServiceProps } from "app/services/cart.service";

import Goods from "app/components/goods";
import Plug from "app/components/plug";

import { Button } from "app/ui-kit/button";

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  cartService: TCartServiceProps;
};

const Cart: FC<TProps> = ({ cartService }) => {
  const { goods, actions: cartActions } = cartService;
  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();

  useEffect(() => {
    cartActions.getCartProduct();
  }, []);

  const onDeleteCart = useCallback(
    (id: string) => cartActions.deleteCartProductItem(id),
    []
  );

  const onAddCart = useCallback((item) => cartActions.setCartProduct(item), []);

  const onDeleteId = useCallback(
    (id: string) => cartActions.deleteCartProductId(id),
    []
  );

  const renderGoodList = useMemo(
    () =>
      goods.map((item) => (
        <Goods
          className={classes.goodsItem}
          key={item.id}
          img={item.img}
          count={item.count}
          price={item.price}
          onDeleteCart={() => onDeleteCart(item.id)}
          onAddCart={() => onAddCart(item)}
          onDeleteId={() => onDeleteId(item.id)}
        />
      )),
    [goods, onDeleteCart, onAddCart, onDeleteId]
  );

  return (
    <div className={`${classesApp.box} ${classesApp.indent}`}>
      {!!goods.length ? (
        <>
          <Grid
            className={classesApp.largeText}
            container
            justifyContent="center"
          >
            Корзина
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Grid container direction="column" alignItems="center">
              {renderGoodList}
            </Grid>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Grid container justifyContent="center">
              <Button className={classesApp.captionText}>
                <Link className={classes.link} to="/order">
                  Перейти к оформлению
                </Link>
              </Button>
            </Grid>
          </Box>
        </>
      ) : (
        <Plug>Товаров в корзине нету</Plug>
      )}
    </div>
  );
};

export default CartService(Cart);
