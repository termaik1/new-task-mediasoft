import { TFilterItem } from "app/models/filter.model";
import {
  UPDATE_CURRENT_PAGE,
  SET_PRODUCT_ITEM,
  RESET_PRODUCT_ITEM,
  SET_FILTER_ITEM,
  RESET_FILTERS,
} from "./product.constants";
import { TProductItem } from "./product.models";

export interface IProductActions {
  updateCurrenPage(page: number): void;
  setProductItem(product: TProductItem): void;
  resetProductItem(): void;
  setFilterItem(item: TFilterItem): void;
  resetFilters(): void;
}

export const updateCurrenPage = (page: number) => ({
  type: UPDATE_CURRENT_PAGE,
  payload: { page },
});

export const setProductItem = (product: TProductItem) => ({
  type: SET_PRODUCT_ITEM,
  payload: product,
});

export const resetProductItem = () => ({
  type: RESET_PRODUCT_ITEM,
});

export const setFilterItem = (item: TFilterItem) => ({
  type: SET_FILTER_ITEM,
  payload: item,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});
