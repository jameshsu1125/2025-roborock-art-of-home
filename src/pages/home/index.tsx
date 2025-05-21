import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import { HomeContext, HomeState, HomeStepType, THomeState } from './config';
import './index.less';
import Landing from './landing';
import Question from './question';
import Gtag from 'lesca-gtag';

const Home = memo(() => {
  const [, seContext] = useContext(Context);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    Gtag.pv('首頁');
  }, []);

  return (
    <OnloadProvider
      onload={() => {
        seContext({ type: ActionType.LoadingProcess, state: { enabled: false } });
        setState((S) => ({ ...S, step: HomeStepType.FadeIn }));
      }}
    >
      <div className='Home'>
        <HomeContext.Provider value={[state, setState]}>
          <Landing />
          <Question />
        </HomeContext.Provider>
      </div>
    </OnloadProvider>
  );
});

export default Home;
