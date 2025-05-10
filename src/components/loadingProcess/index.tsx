import { Context } from '@/settings/constant';
import { ActionType, IReactProps } from '@/settings/type';
import { memo, useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import './index.less';

const Background = () => <div className='background' />;

const Text = ({ children }: IReactProps) => (
  <span className='text-textColor relative'>{children}</span>
);

const LoadingProcess = memo(() => {
  const [context] = useContext(Context);
  const data = context[ActionType.LoadingProcess];

  return (
    <div className='Loading'>
      <Background />
      <div className={twMerge('icon', data?.type)} />
      {data?.body && <Text>{data.body}</Text>}
    </div>
  );
});
export default LoadingProcess;
