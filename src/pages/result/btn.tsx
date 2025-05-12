import { ACTIVE_URL, PAGE } from '@/settings/config';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import Facebook from 'lesca-facebook-share';
import { memo, useContext } from 'react';

const Btns = memo(() => {
  const [, setContext] = useContext(Context);
  return (
    <div className='Btns'>
      <button
        className='btn-0'
        onClick={() => {
          Facebook.share({
            method: 'share',
            href: 'https://github.com/jameshsu1125/lesca-facebook-share',
            quote: 'use share facebook api simply',
            hashtag: 'lesca_facebook_share',
            redirect_uri: window.location.href,
          });
        }}
      >
        <div />
      </button>
      <button
        className='btn-1'
        onClick={() => {
          setContext({ type: ActionType.Page, state: PAGE.home });
        }}
      >
        <div />
      </button>
      <button
        className='btn-2'
        onClick={() => {
          window.open(ACTIVE_URL, '_blank');
        }}
      >
        <div />
      </button>
    </div>
  );
});
export default Btns;
