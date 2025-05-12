import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import Div100vh from 'react-div-100vh';
import './index.less';

const Container = memo(({ children }: IReactProps) => (
  <Div100vh className='Container flex items-center justify-center'>
    <div className='relative w-full max-w-xl'>{children}</div>
  </Div100vh>
));
export default Container;
