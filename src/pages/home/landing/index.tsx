import Button from '@/components/button';
import { memo, useContext } from 'react';
import { HomeContext, HomePageType } from '../config';
import './index.less';
import Logo from './logo';
import { twMerge } from 'tailwind-merge';
import Headline from './headline';
import Subline from './subline';
import Btn from './btn';

const Landing = memo(() => {
  const [state, setState] = useContext(HomeContext);

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
