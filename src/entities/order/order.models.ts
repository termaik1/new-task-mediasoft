export type TOrderInitialState = {
    steps: StepItem[]
};

export type StepItem = {
  title: string;
  isActive: boolean;
  isPassed: boolean;
};

export interface INextStepItem extends StepItem {
    index: number
}