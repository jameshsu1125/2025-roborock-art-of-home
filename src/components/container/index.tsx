import { IReactProps } from '@/settings/type';
import { memo } from 'react';
import Div100vh from 'react-div-100vh';

const Container = memo(({ children }: IReactProps) => (
  <Div100vh className='flex items-center justify-center'>
    <div className='h-full w-full max-w-3xl'>{children}</div>
  </Div100vh>
));
export default Container;
