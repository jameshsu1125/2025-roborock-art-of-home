import { memo, useContext, useEffect, useMemo } from 'react';
import { ResultContext } from './config';
import Image0 from './img/r0.jpg';
import Image1 from './img/r1.jpg';
import Image2 from './img/r2.jpg';
import Image3 from './img/r3.jpg';
import Image4 from './img/r4.jpg';

const Images = memo(() => {
  const [{ index }] = useContext(ResultContext);

  const images = useMemo(() => {
    return <img src={[Image0, Image1, Image2, Image3, Image4][index]} />;
  }, [index]);

  return <div className='Images'>{images}</div>;
});
export default Images;
