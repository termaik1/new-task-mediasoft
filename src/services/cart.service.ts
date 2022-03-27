import { Dispatch } from "redux";
import { IRootState } from "app/entities/store";
import { connect } from "./connect";

import { TCartState } from "app/entities/cart/cart.reducers";
import {
  ICartActions,
  getCartProduct,
  setCartProduct,
  deleteCartProductItem,
  deleteCartProductId,
  resetData
} from "app/entities/cart/cart.actions";
import { IGoodsItem } from "app/entities/cart/cart.models";

import { asyncLocalStorage } from "app/utils/async.local.storage.util";

const mapStateToProps = (state: IRootState): TCartState => state.cart;
const mapDispatchToProps = (dispatch: Dispatch): ICartActions => ({
  getCartProduct: async () => {
    const data = await asyncLocalStorage.getItem<IGoodsItem[]>("goods");

    !!data && data.length > 0 && dispatch(getCartProduct(data));
  },
  setCartProduct: (data) => dispatch(setCartProduct(data)),
  deleteCartProductItem: (id) => dispatch(deleteCartProductItem(id)),
  deleteCartProductId: (id) => dispatch(deleteCartProductId(id)),
  resetData: () => dispatch(resetData())
});

export type TCartServiceProps = ReturnType<typeof mapStateToProps> & {
  actions: ReturnType<typeof mapDispatchToProps>;
};

export const CartService = connect<TCartServiceProps>(
  "cartService",
  mapStateToProps,
  mapDispatchToProps
);
