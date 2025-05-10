import { createContext, Dispatch, SetStateAction } from 'react';

export enum ResultStepType {
  Unset,
  FadeIn,
}
export type TResultState = { step: ResultStepType };
export type TResultContext = [TResultState, Dispatch<SetStateAction<TResultState>>];

export const ResultState: TResultState = { step: ResultStepType.Unset };
export const ResultContext = createContext<TResultContext>([ResultState, () => {}]);
