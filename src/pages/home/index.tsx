import React, { useMemo, useState, useCallback, FC, useEffect } from "react";

import flow from "lodash.flow";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import { useMobile } from "app/hooks/use.mobile.hook";
import { useUtm } from "app/hooks/use.utm.hook";

import {
  ProductService,
  TProductServiceProps,
} from "app/services/product.service";
import { CartService, TCartServiceProps } from "app/services/cart.service";
import { TProductItem } from "app/entities/product/product.models";

import Product from "app/components/product";
import Pagination from "app/components/pagination";
import Filters from "app/components/filters";
import ModalProductDescription from "app/components/modals/product.description.modal";

import stylesApp from "app/config/theme";
import styles from "./styles";
import { TFilterItem } from "app/models/filter.model";

type TProps = {
  productService: TProductServiceProps;
  cartService: TCartServiceProps;
};

const Home: FC<TProps> = ({ productService, cartService }) => {
  const {
    filter,
    currentPage,
    totalCount,
    visibleElement,
    products,
    actions: productActions,
  } = productService;
  const { goods, actions: cartActions } = cartService;

  const { isMobile } = useMobile();
  const { setQueryParams } = useUtm();
  const classesApp = stylesApp({ isMobile });
  const classes = styles({ isMobile });

  const [isModalProduct, setIsModalProduct] = useState(false);

  useEffect(() => {
    return () => {
      productActions.resetFilters();
    };
  }, []);

  const openModalProduct = useCallback((item: TProductItem) => {
    productActions.setProductItem(item);
    setQueryParams({ id: item.id });
    setIsModalProduct(true);
  }, []);

  const closeModalProduct = useCallback(() => {
    setQueryParams({ id: undefined });
    setIsModalProduct(false);
    productActions.resetProductItem();
  }, []);

  const onChangeFilterItem = useCallback(
    (item: TFilterItem) => productActions.setFilterItem(item),
    []
  );

  const onAddProductCart = useCallback((item) => {
    cartActions.setCartProduct(item);
  }, []);

  const onDeleteProductCart = useCallback((id: string) => {
    cartActions.deleteCartProductItem(id);
  }, []);

  const getCountProduct = useCallback(
    (id: string) => {
      const find = goods.find((item) => item.id === id);

      return !!find?.count ? find.count : 0;
    },
    [goods]
  );

  const onNextPage = (page: number) => productActions.updateCurrenPage(page);

  const filterList = useMemo(() => Object.values(filter), [filter]);
    console.log('filterList', filterList)
  const currentProducts = useMemo(() => {
    if (isMobile) {
      return products.slice(0, visibleElement * currentPage);
    }
    if (currentPage === 1) {
      return products.slice(0, visibleElement);
    }

    const currentVisibleElement =
      currentPage - 1 ? visibleElement * (currentPage - 1) : visibleElement;

    return products.slice(
      currentVisibleElement,
      currentVisibleElement + visibleElement
    );
  }, [currentPage, visibleElement, products, isMobile]);

  const renderProductList = useMemo(
    () =>
      currentProducts.map((item) => (
        <Product
          key={item.id}
          className={classes.productItem}
          onModal={() => openModalProduct(item)}
          price={item.price}
          img={item.img}
          name={item.name}
          count={getCountProduct(item.id)}
          onAddCart={() => onAddProductCart(item)}
          onDeleteCart={() => onDeleteProductCart(item.id)}
        />
      )),
    [
      currentProducts,
      openModalProduct,
      onAddProductCart,
      onDeleteProductCart,
      getCountProduct,
    ]
  );

  return (
    <div className={`${classesApp.box} ${classesApp.indent}`}>
      <Grid container justifyContent="center">
        <Filters list={filterList} onChangeFilterItem={onChangeFilterItem} />
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Grid
          container
          direction="row"
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems="center"
        >
          {renderProductList}
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Grid container justifyContent="center">
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            visibleElement={visibleElement}
            onNextPage={onNextPage}
          />
        </Grid>
      </Box>
      <ModalProductDescription
        isOpen={isModalProduct}
        onClose={closeModalProduct}
      />
    </div>
  );
};

export default flow([ProductService, CartService])(Home);
