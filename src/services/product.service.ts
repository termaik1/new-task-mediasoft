import { Dispatch } from "redux";
import { IRootState } from "app/entities/store";

import { connect } from "./connect";

import { TProductState } from "app/entities/product/product.reducers";
import {
  IProductActions,
  updateCurrenPage,
  setProductItem,
  resetProductItem,
  resetFilters,
  setFilterItem,
  searchValue,
} from "app/entities/product/product.actions";

const mapStateToProps = (state: IRootState): TProductState => state.product;
const mapDispatchToProps = (dispatch: Dispatch): IProductActions => ({
  updateCurrenPage: (page) => dispatch(updateCurrenPage(page)),
  setProductItem: (product) => dispatch(setProductItem(product)),
  resetProductItem: () => dispatch(resetProductItem()),
  resetFilters: () => dispatch(resetFilters()),
  setFilterItem: (item) => dispatch(setFilterItem(item)),
  searchValue: (value) => dispatch(searchValue(value)),
});

export type TProductServiceProps = ReturnType<typeof mapStateToProps> & {
  actions: ReturnType<typeof mapDispatchToProps>;
};

export const ProductService = connect<TProductServiceProps>(
  "productService",
  mapStateToProps,
  mapDispatchToProps
);
