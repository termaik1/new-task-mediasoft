import React, { FC, useEffect } from "react";

import { useMobile } from "app/hooks/use.mobile.hook";
import { TProductItem } from "app/entities/product/product.models";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {
  ProductService,
  TProductServiceProps,
} from "app/services/product.service";

import { Button } from "app/ui-kit/button";
import { Fieldset } from "app/ui-kit/fieldset";
import { Modal, TModalProps } from "app/ui-kit/modal";
import { Loader } from "app/ui-kit/loader";

import classesApp from "app/config/theme";
import styles from "./styles";

interface IProps extends TModalProps {
  productService: TProductServiceProps
}

const ModalProductDescription: FC<IProps> = ({ isOpen, onClose, productService }) => {
  const { productItem } = productService;
  const { isMobile } = useMobile();

  const stylesApp = classesApp({ isMobile });
  const classes = styles();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Описание продукта">
      {!!productItem?.id ? (
        <>
          <img className={classes.img} src={productItem.img} alt="product_icon" />

          <Box sx={{ mt: 2 }}>
            <Fieldset legend="Описание">
              <div className={stylesApp.smallText}>Цена: {productItem.price}</div>
              <div className={stylesApp.smallText}>{productItem.description}</div>
            </Fieldset>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Grid container justifyContent="flex-end">
              <Button className={stylesApp.captionText} onClick={onClose}>
                Закрыть
              </Button>
            </Grid>
          </Box>
        </>
      ) : (
        <Loader />
      )}
    </Modal>
  );
};

export default ProductService(ModalProductDescription);
