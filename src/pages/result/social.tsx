import { memo, useEffect } from 'react';

const Social = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Social'>
      <div className='fb-ig'>
        <div>
          <div className='fb' />
          <div className='social-txt'>
            FB活動貼文下留言
            <br />
            分享結果圖+@1位好友
            <br />
            就能抽大獎!
          </div>
        </div>
        <div>
          <div className='ig' />
          <div className='social-txt'>
            個人IG轉發結果圖至
            <br />
            限動+@roborock_Taiwan
            <br />
            就能抽大獎！
          </div>
        </div>
      </div>
      <div className='remind'>
        <div />
      </div>
    </div>
  );
});
export default Social;
