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

const Result = memo(() => {
  const [, setContext] = useContext(Context);
  const [state, setState] = useState<TResultState>(ResultState);

  useEffect(() => {
    setState((S) => ({
      ...S,
      index: Math.min(5, Math.floor(Math.random() * 5)),
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
