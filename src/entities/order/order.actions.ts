import {
  NEXT_STEP_ITEM,
  RESET_STEPS,
  SET_STEP_RESULT,
} from "./order.constants";
import { INextStepItem } from "./order.models";

export interface IOrderActions {
  nextStepItem(step: INextStepItem): void;
  resetSteps(): void;
  setStepResult<T>(result: T): void;
}

export const nextStepItem = (step: INextStepItem) => ({
  type: NEXT_STEP_ITEM,
  payload: step,
});

export const resetSteps = () => ({
  type: RESET_STEPS,
});

export const setStepResult = <T>(result: T) => ({
  type: SET_STEP_RESULT,
  payload: result,
});
