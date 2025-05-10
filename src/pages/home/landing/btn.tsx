import Button from '@/components/button';
import { memo, useContext, useEffect } from 'react';
import { HomeContext, HomePageType, HomeStepType } from '../config';
import useTween, { Bezier } from 'lesca-use-tween';

const Btn = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, scale: 2 });
  const [{ step }, setState] = useContext(HomeContext);

  useEffect(() => {
    if (step === HomeStepType.FadeIn) {
      setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 1600, easing: Bezier.outBack });
    }
  }, [step]);

  return (
    <div className='btn' style={style}>
      <Button
        className='cursor-pointer'
        onClick={() => {
          setState((S) => ({ ...S, page: HomePageType.Question }));
        }}
      >
        <Button.Regular>
          <div className='start' />
        </Button.Regular>
      </Button>
    </div>
  );
});
export default Btn;
