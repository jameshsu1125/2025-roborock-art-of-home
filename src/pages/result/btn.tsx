import { ACTIVE_URL, PAGE } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import { memo, useContext, useEffect, useId } from 'react';

const Share = memo(() => {
  const id = useId();
  useEffect(() => {
    Click.add(`#${id}`, () => {
      Gtag.event('結果頁', '分享');
      setTimeout(() => {
        Facebook.share({
          method: 'share',
          href: 'https://roborock-art-of-cleaning.netlify.app/',
          hashtag: 'Roborock',
          redirect_uri: window.location.href,
        });
      }, 500);
    });
  }, [id]);
  return (
    <button id={id} className='btn-0'>
      <div />
    </button>
  );
});

const PlayAgain = memo(() => {
  const id = useId();
  const [, setContext] = useContext(Context);
  useEffect(() => {
    Click.add(`#${id}`, () => {
      setContext({ type: ActionType.LoadingProcess, state: { enabled: true } });
      setContext({ type: ActionType.Page, state: PAGE.home });
      Gtag.event('結果頁', '再玩一次');
    });
  }, [id]);

  return (
    <button id={id} className='btn-1'>
      <div />
    </button>
  );
});

const ActiveBtn = memo(() => {
  const id = useId();
  useEffect(() => {
    Click.add(`#${id}`, () => {
      Gtag.event('結果頁', '立即擁有');
      setTimeout(() => {
        window.open(ACTIVE_URL, '_blank');
      }, 500);
    });
  }, [id]);
  return (
    <button id={id} className='btn-2'>
      <div />
    </button>
  );
});

const Btns = memo(() => (
  <div className='Btns'>
    <Share />
    <PlayAgain />
    <ActiveBtn />
  </div>
));
export default Btns;
