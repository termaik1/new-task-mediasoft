import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useMobile } from "app/hooks/use.mobile.hook";

import { CartService, TCartServiceProps } from 'app/services/cart.service'

import stylesApp from "app/config/theme";
import styles from "./styles";

type TProps = {
  cartService: TCartServiceProps
}

const Header: FC<TProps> = ({ cartService }) => {
  const { goods, actions: cartActions} = cartService;

  const { isMobile } = useMobile();
  const classesApp = stylesApp({ isMobile });
  const classes = styles();


  useEffect(() => {
    cartActions.getCartProduct()
  }, [])

  return (
    <header className={`${classes.root} ${classesApp.box}`}>
      <Grid container justifyContent="space-between">
        <Box sx={{ ml: 2 }}>
          <Link className={`${classesApp.largeText} ${classes.link}`} to="/">
            На главную
          </Link>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Link className={classes.link} to="/cart">
            <span className={classesApp.largeText}>Корзина</span>&nbsp;
            <span className={classesApp.smallText}>({goods.length})</span>
          </Link>
        </Box>
      </Grid>
    </header>
  );
};

export default CartService(Header);
