import { NEXT_STEP_ITEM, RESET_STEPS } from "./order.constants";
import { TOrderInitialState } from "./order.models";
import { nextStepItem } from "./order.actions";

import stepsData from "app/data/steps.data";

const initialState: TOrderInitialState = {
  steps: stepsData,
};

const orderReducers = {
  [NEXT_STEP_ITEM]: (
    state: TOrderInitialState,
    { payload }: ReturnType<typeof nextStepItem>
  ) => {
    const newSteps = state.steps.map((item, index) => {
      if (index < payload.index) {
        return {
          title: item.title,
          isActive: false,
          isPassed: true,
        };
      }

      if (index === payload.index) {
        return {
          title: payload.title,
          isPassed: false,
          isActive: true,
        };
      }

      return item;
    });

    return { ...state, steps: newSteps };
  },
  [RESET_STEPS]: (state: TOrderInitialState) => ({
    ...state,
    steps: initialState.steps,
  }),
};

const order = (state = initialState, action): TOrderInitialState => {
  const reducers = orderReducers[action.type];

  if (!reducers) {
    return state;
  }

  return reducers(state, action);
};

export type TOrderState = Readonly<typeof initialState>;
export default order;
