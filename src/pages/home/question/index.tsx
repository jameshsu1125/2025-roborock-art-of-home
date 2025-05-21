import { memo, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { HomeContext, HomePageType } from '../config';
import Background from './background';
import Buttons from './buttons';
import './index.less';
import Process from './process';
import Questions from './question';
import Gtag from 'lesca-gtag';

const Question = memo(() => {
  const [state] = useContext(HomeContext);
  useEffect(() => {
    if (state.page === HomePageType.Question) {
      Gtag.pv('問題頁');
    }
  }, [state.page]);

  return (
    <div className={twMerge('Question', state.page === HomePageType.Question ? 'block' : 'hidden')}>
      <div className='flex h-full w-full flex-col items-center justify-start gap-10'>
        <Background />
        <Process />
        <Questions />
        <Buttons />
      </div>
    </div>
  );
});
export default Question;
