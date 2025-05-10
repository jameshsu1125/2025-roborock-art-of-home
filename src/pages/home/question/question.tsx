import { memo, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { HomeContext } from '../config';

const Questions = memo(() => {
  const [{ question }] = useContext(HomeContext);
  useEffect(() => {}, []);
  return (
    <div className={twMerge('Questions', `q${question}`)}>
      <div />
    </div>
  );
});
export default Questions;
