import { Dispatch } from "redux";
import { IRootState } from "app/entities/store";

import { connect } from "./connect";

import { TOrderState } from "app/entities/order/order.reducers";
import {
  IOrderActions,
  nextStepItem,
  resetSteps,
  setStepResult
} from "app/entities/order/order.actions";

const mapStateToProps = (state: IRootState): TOrderState => state.order;
const mapDispatchToProps = (dispatch: Dispatch): IOrderActions => ({
  nextStepItem: (item) => dispatch(nextStepItem(item)),
  resetSteps: () => dispatch(resetSteps()),
  setStepResult: <T>(result: T) => dispatch(setStepResult<T>(result))
});

export type TOrderServiceProps = ReturnType<typeof mapStateToProps> & {
  actions: ReturnType<typeof mapDispatchToProps>;
};

export const OrderService = connect<TOrderServiceProps>(
  "orderService",
  mapStateToProps,
  mapDispatchToProps
);
