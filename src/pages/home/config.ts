import { createContext, Dispatch, SetStateAction } from 'react';

export enum HomeStepType {
  Unset = 0,
  FadeIn = 1,
}

export enum HomePageType {
  Landing = 0,
  Question = 1,
  Result = 2,
}

export type THomeState = {
  step: HomeStepType;
  page: HomePageType;
  question: number;
  answers: number[];
};
export type THomeContext = [THomeState, Dispatch<SetStateAction<THomeState>>];

export const HomeState: THomeState = {
  step: HomeStepType.Unset,
  page: HomePageType.Question,
  question: 0,
  answers: [],
};
export const HomeContext = createContext<THomeContext>([HomeState, () => {}]);
