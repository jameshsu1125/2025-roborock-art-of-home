import { memo, useContext, useEffect } from 'react';
import { HomeContext } from '../config';

const Process = memo(() => {
  const [{ question }] = useContext(HomeContext);

  useEffect(() => {}, []);
  return (
    <div className='Process'>
      <div style={{ width: `${question * 20}%` }} />
    </div>
  );
});
export default Process;
