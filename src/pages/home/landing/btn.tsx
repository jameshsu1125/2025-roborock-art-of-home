import Button from '@/components/button';
import Click from 'lesca-click';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useId } from 'react';
import { HomeContext, HomePageType, HomeStepType } from '../config';
import Gtag from 'lesca-gtag';

const Btn = memo(() => {
  const id = useId();
  const [style, setStyle] = useTween({ opacity: 0, scale: 2 });
  const [{ step }, setState] = useContext(HomeContext);

  useEffect(() => {
    if (step === HomeStepType.FadeIn) {
      setStyle({ opacity: 1, scale: 1 }, { duration: 500, delay: 1600, easing: Bezier.outBack });
    }
  }, [step]);

  useEffect(() => {
    Click.add(`#${id}`, () => {
      Gtag.event('首頁', '開始測驗');
      setState((S) => ({ ...S, page: HomePageType.Question }));
    });
  }, [id]);

  return (
    <div className='btn' style={style}>
      <Button id={id} className='cursor-pointer [&_*]:pointer-events-none'>
        <Button.Regular>
          <div className='start' />
        </Button.Regular>
      </Button>
    </div>
  );
});
export default Btn;
