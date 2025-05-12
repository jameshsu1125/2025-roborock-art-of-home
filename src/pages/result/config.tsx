import { createContext, Dispatch, SetStateAction } from 'react';

export enum ResultStepType {
  Unset,
  FadeIn,
}
export type TResultState = { step: ResultStepType; index: number };
export type TResultContext = [TResultState, Dispatch<SetStateAction<TResultState>>];

export const ResultState: TResultState = {
  step: ResultStepType.Unset,
  index: Math.min(5, Math.floor(Math.random() * 5)),
};

export const ResultContext = createContext<TResultContext>([ResultState, () => {}]);
