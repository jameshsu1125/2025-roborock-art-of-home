import { memo, useContext, useEffect } from 'react';
import { ResultContext } from './config';

const Images = memo(() => {
  const [{ index }] = useContext(ResultContext);

  useEffect(() => {}, []);

  return (
    <div className='Images'>
      <div className={`i${index}`} />
    </div>
  );
});
export default Images;
