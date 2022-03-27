import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import product, { TProductState } from "./product/product.reducers";
import cart, { TCartState } from "./cart/cart.reducers";
import order, { TOrderState } from "./order/order.reducers";

export interface IRootState {
  readonly product: TProductState;
  readonly cart: TCartState;
  readonly order: TOrderState;
}

const rootReducers = combineReducers<IRootState>({
  product,
  cart,
  order,
});

const store = createStore(rootReducers, composeWithDevTools());

type TRootReducerType = typeof rootReducers;

export type TStore = ReturnType<TRootReducerType>;
export { store };
