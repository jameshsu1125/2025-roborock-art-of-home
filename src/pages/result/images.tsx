import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo } from 'react';
import { ResultContext, ResultStepType } from './config';
import Image0 from './img/r0.jpg';
import Image1 from './img/r1.jpg';
import Image2 from './img/r2.jpg';
import Image3 from './img/r3.jpg';
import Image4 from './img/r4.jpg';

const Images = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0 });
  const [{ index, step }] = useContext(ResultContext);

  const images = useMemo(() => {
    return [Image0, Image1, Image2, Image3, Image4][index];
  }, [index]);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle({ opacity: 1 }, { duration: 500 });
    }
  }, [step]);

  return (
    <div style={style} className='Images'>
      <img src={images} />
    </div>
  );
});
export default Images;
