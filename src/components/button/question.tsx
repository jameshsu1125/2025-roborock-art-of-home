import { IReactProps } from '@/settings/type';
import { memo } from 'react';

const Question = memo(({ children }: IReactProps) => (
  <div className='hover:bg-primary relative rounded-l-full rounded-r-full bg-black pb-[27.198825071758666%]'>
    <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center text-white'>
      {children}
    </div>
  </div>
));
export default Question;
