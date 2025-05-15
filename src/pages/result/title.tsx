import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { ResultContext, ResultStepType } from './config';

const Title = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  const [{ index, step }] = useContext(ResultContext);
  useEffect(() => {
    if (step === ResultStepType.FadeIn)
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 200 });
  }, [step]);
  return (
    <div className='Title' style={style}>
      <div className={`t${index}`} />
    </div>
  );
});
export default Title;
