import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { HomeContext, HomeStepType } from '../config';

const Text = memo(({ delay }: { delay: number }) => {
  const [{ step }] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, x: 50 });

  useEffect(() => {
    if (step === HomeStepType.FadeIn) {
      setStyle({ opacity: 1, x: 0 }, { duration: 500, delay });
    }
  }, [step]);
  return <div style={style} />;
});

const Headline = memo(() => (
  <div className='headline'>
    <Text delay={300} />
    <Text delay={400} />
  </div>
));
export default Headline;
