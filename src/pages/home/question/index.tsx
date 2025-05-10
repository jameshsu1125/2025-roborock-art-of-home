import { memo, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { HomeContext, HomePageType } from '../config';
import Background from './background';
import Buttons from './buttons';
import './index.less';
import Process from './process';
import Questions from './question';

const Question = memo(() => {
  const [state] = useContext(HomeContext);
  useEffect(() => {}, []);
  return (
    <div className={twMerge('Question', state.page === HomePageType.Question ? 'block' : 'hidden')}>
      <Background />
      <Process />
      <Questions />
      <Buttons />
    </div>
  );
});
export default Question;
