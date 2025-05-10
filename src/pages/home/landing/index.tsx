import { memo, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { HomeContext, HomePageType } from '../config';
import Btn from './btn';
import Headline from './headline';
import './index.less';
import Logo from './logo';
import Subline from './subline';

const Landing = memo(() => {
  const [state] = useContext(HomeContext);

  return (
    <div className={twMerge('Landing', state.page === HomePageType.Landing ? 'block' : 'hidden')}>
      <div className='bg'>
        <div />
      </div>
      <div className='ink' />
      <Logo />
      <div className='content'>
        <Headline />
        <Subline />
        <Btn />
      </div>
    </div>
  );
});
export default Landing;
