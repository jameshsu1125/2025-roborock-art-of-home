import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import Click from 'lesca-click';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import Btns from './btn';
import { ResultContext, ResultState, ResultStepType, TResultState } from './config';
import Images from './images';
import './index.less';
import Social from './social';
import Title from './title';

const QuestionIndex = [1, 4, 0, 2, 3];

const Result = memo(() => {
  const [context, setContext] = useContext(Context);
  const [state, setState] = useState<TResultState>(ResultState);

  useEffect(() => {
    const { data: answers } = context[ActionType.Answers] || { data: [] };

    const index =
      answers.length === 0
        ? undefined
        : answers.reduce(
            (acc, item) => {
              const count = answers.filter((v) => v === item).length;
              return count > acc.count ? { item, count } : acc;
            },
            { item: answers[0], count: 0 },
          ).item;

    setState((S) => ({
      ...S,
      index: QuestionIndex[index || 0],
      step: ResultStepType.Unset,
    }));
    setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
    Click.addPreventExcept('.scrollable');
  }, []);

  return (
    <ResultContext.Provider value={[state, setState]}>
      <OnloadProvider
        onload={() => {
          setContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
          setState((S) => ({ ...S, step: ResultStepType.FadeIn }));
        }}
      >
        <div className='Result'>
          <div className='scrollable'>
            <div className='flex w-full flex-col items-start justify-start gap-5 p-5'>
              <Images />
              <Title />
              <Social />
              <Btns />
            </div>
          </div>
        </div>
      </OnloadProvider>
    </ResultContext.Provider>
  );
});
export default Result;
