import { memo, useContext, useEffect } from 'react';
import { ResultContext } from './config';

const Title = memo(() => {
  const [{ index }] = useContext(ResultContext);
  return (
    <div className='Title'>
      <div className={`t${index}`} />
    </div>
  );
});
export default Title;
