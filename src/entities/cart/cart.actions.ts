import {
  GET_CART_PRODUCT,
  SET_CART_PRODUCT,
  DELETE_CART_PRODUCT_ITEM,
  DELETE_CART_PRODUCT_ITEM_ID,
  RESET_DATA,
} from "./cart.constants";
import { TProductItem } from "app/entities/product/product.models";
import { IGoodsItem } from "./cart.models";

export interface ICartActions {
  getCartProduct(): void;
  setCartProduct(product: TProductItem): void;
  deleteCartProductItem(id: TProductItem["id"]): void;
  deleteCartProductId(id: TProductItem["id"]): void;
  resetData: () => void;
}

export const getCartProduct = (data: IGoodsItem[]) => ({
  type: GET_CART_PRODUCT,
  deleteCartProductId,
  payload: data,
});

export const setCartProduct = (data: TProductItem) => ({
  type: SET_CART_PRODUCT,
  payload: data,
});

export const deleteCartProductItem = (id: TProductItem["id"]) => ({
  type: DELETE_CART_PRODUCT_ITEM,
  payload: {
    id,
  },
});

export const deleteCartProductId = (id: TProductItem["id"]) => ({
  type: DELETE_CART_PRODUCT_ITEM_ID,
  payload: { id },
});

export const resetData = () => ({
  type: RESET_DATA,
});
