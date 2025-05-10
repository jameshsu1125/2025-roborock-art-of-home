import OnloadProvider from 'lesca-react-onload';
import { memo, useState } from 'react';
import { ResultContext, ResultState, ResultStepType, TResultState } from './config';
import './index.less';

const Result = memo(() => {
  const [state, setState] = useState<TResultState>(ResultState);
  return (
    <ResultContext.Provider value={[state, setState]}>
      <OnloadProvider onload={() => setState((S) => ({ ...S, step: ResultStepType.FadeIn }))}>
        <div className='Result'>Result</div>
      </OnloadProvider>
    </ResultContext.Provider>
  );
});
export default Result;
