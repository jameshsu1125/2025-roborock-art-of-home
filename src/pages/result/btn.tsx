import Facebook from 'lesca-facebook-share';
import { memo, useEffect } from 'react';

const Btns = memo(() => {
  useEffect(() => {}, []);
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
      <button className='btn-1'>
        <div />
      </button>
      <button className='btn-2'>
        <div />
      </button>
    </div>
  );
});
export default Btns;
