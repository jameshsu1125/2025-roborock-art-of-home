import { Dispatch, ReactNode } from 'react';

export enum ActionType {
  Page = 'page',
  LoadingProcess = 'loadingProcess',
  Answers = 'answers',
}

export enum LoadingProcessType {
  Ball = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}

export enum TransitionType {
  Unset = 0,
  FadeIn = 1,
  FadeOut = 2,
  DidFadeIn = 3,
  DidFadeOut = 4,
  Loop = 5,
  Stop = 6,
}

export type TLoadingProcessState = {
  enabled?: boolean;
  type?: LoadingProcessType;
  body?: '';
};

export type TAnswers = {
  data: number[];
};

export interface IState {
  page?: string;
  loadingProcess?: TLoadingProcessState;
  answers?: TAnswers;
}

export interface IAction {
  state: IState | TLoadingProcessState | string | TAnswers;
  type: ActionType;
}

export type TContext = [IState, Dispatch<IAction>];

export interface IReactProps {
  readonly children?: ReactNode;
}
