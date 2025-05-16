import { memo, useContext, useEffect } from 'react';
import { HomeContext, HomePageType, HomeQuestions } from '../config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { PAGE } from '@/settings/config';
import useTween, { Bezier } from 'lesca-use-tween';

const Process = memo(() => {
  const [, setContext] = useContext(Context);
  const [{ question, page, answers }] = useContext(HomeContext);

  const [style, setStyle] = useTween({ opacity: 0, y: -100 });

  useEffect(() => {
    if (question === HomeQuestions.length) {
      setTimeout(() => {
        setContext({ type: ActionType.Answers, state: { data: answers } });
        setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
        setContext({ type: ActionType.Page, state: PAGE.result });
      }, 800);
    }
  }, [question, answers]);

  useEffect(() => {
    if (page === HomePageType.Question) {
      setStyle({ opacity: 1, y: 0 }, { duration: 600, easing: Bezier.outBack });
    }
  }, [page]);

  return (
    <div className='Process' style={style}>
      <div style={{ width: `${question * 20}%` }} />
    </div>
  );
});
export default Process;
