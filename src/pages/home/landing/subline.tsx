import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { HomeContext, HomeStepType } from '../config';

const Text = memo(({ delay }: { delay: number }) => {
  const [{ step }] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  useEffect(() => {
    if (step === HomeStepType.FadeIn) setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
  }, [step]);
  return <div style={style} />;
});

const Subline = memo(() => (
  <div className='subline'>
    <Text delay={1000} />
    <Text delay={1100} />
  </div>
));
export default Subline;
