import {
  GET_CART_PRODUCT,
  SET_CART_PRODUCT,
  DELETE_CART_PRODUCT_ITEM,
  DELETE_CART_PRODUCT_ITEM_ID,
  RESET_DATA,
} from "./cart.constants";

import {
  getCartProduct,
  setCartProduct,
  deleteCartProductItem,
  deleteCartProductId,
} from "./cart.actions";

import { IGoodsItem, TCartInitialState } from "./cart.models";
import { asyncLocalStorage } from "app/utils/async.local.storage.util";

const initialState: TCartInitialState = {
  goods: [],
};

const cartReducers = {
  [GET_CART_PRODUCT]: (
    state: TCartInitialState,
    { payload }: ReturnType<typeof getCartProduct>
  ) => ({
    ...state,
    goods: payload,
  }),
  [SET_CART_PRODUCT]: (
    state: TCartInitialState,
    { payload }: ReturnType<typeof setCartProduct>
  ) => {
    const find = state.goods.find(({ id }) => id === payload.id);

    if (!!find) {
      const newGoods = state.goods.map((item) => {
        if (item.id === payload.id) {
          item.count = item.count + 1;
        }

        return item;
      });

      asyncLocalStorage.setItem<IGoodsItem[]>("goods", newGoods);

      return { ...state, goods: newGoods };
    }

    const newGoodItem = {
      ...payload,
      count: 1,
    };

    const newGoods = [...state.goods, newGoodItem];

    asyncLocalStorage.setItem<IGoodsItem[]>("goods", newGoods);

    return { ...state, goods: newGoods };
  },
  [DELETE_CART_PRODUCT_ITEM]: (
    state: TCartInitialState,
    { payload }: ReturnType<typeof deleteCartProductItem>
  ) => {
    const find = state.goods.find(
      (item) => item.id === payload.id
    ) as IGoodsItem;

    if (find.count > 1) {
      const newGoods = state.goods.map((item) => {
        if (item.id === payload.id) {
          item.count = item.count - 1;
        }

        return item;
      });

      asyncLocalStorage.setItem<IGoodsItem[]>("goods", newGoods);

      return { ...state, goods: newGoods };
    }

    const newGoods = state.goods.filter((item) => item.id !== payload.id);

    asyncLocalStorage.setItem<IGoodsItem[]>("goods", newGoods);

    return { ...state, goods: newGoods };
  },
  [DELETE_CART_PRODUCT_ITEM_ID]: (
    state: TCartInitialState,
    { payload }: ReturnType<typeof deleteCartProductId>
  ) => {
    const goodsFilter = state.goods.filter(({ id }) => id !== payload.id);

    asyncLocalStorage.setItem<IGoodsItem[]>("goods", goodsFilter);

    return { ...state, goods: goodsFilter };
  },
  [RESET_DATA]: () => {
    asyncLocalStorage.removeItem("goods");
    return { ...initialState };
  },
};

const cart = (state = initialState, action): TCartInitialState => {
  const reducers = cartReducers[action.type];

  if (!reducers) {
    return state;
  }

  return reducers(state, action);
};

export type TCartState = Readonly<typeof initialState>;
export default cart;
