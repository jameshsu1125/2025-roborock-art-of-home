import useTween from 'lesca-use-tween';
import UserAgent, { UserAgentType } from 'lesca-user-agent';
import { memo, useContext, useEffect } from 'react';
import { ResultContext, ResultStepType } from './config';

const message =
  UserAgent.get(false) === UserAgentType.Mobile ? '請長按下載圖片或截圖分享' : '請右鍵圖片下載圖片';

const IG = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });
  const [{ step }] = useContext(ResultContext);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 300 });
    }
  }, [step]);

  return <div className='ig' style={style} />;
});

const IG_Text = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });
  const [{ step }] = useContext(ResultContext);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 350 });
    }
  }, [step]);

  return (
    <div className='social-txt' style={style}>
      個人IG轉發結果圖至
      <br />
      限動+@roborock_Taiwan
      <br />
      就能抽大獎！
    </div>
  );
});

const FB = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });
  const [{ step }] = useContext(ResultContext);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 300 });
    }
  }, [step]);

  return <div className='fb' style={style} />;
});

const FB_Text = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });
  const [{ step }] = useContext(ResultContext);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle(
        { opacity: 1, y: 0 },
        {
          duration: 500,
          delay: 350,
          onEnd: () => {
            alert(message);
          },
        },
      );
    }
  }, [step]);

  return (
    <div className='social-txt' style={style}>
      FB活動貼文下留言
      <br />
      分享結果圖+@1位好友
      <br />
      就能抽大獎!
    </div>
  );
});

const Social = memo(() => (
  <div className='Social'>
    <div className='fb-ig'>
      <div>
        <FB />
        <FB_Text />
      </div>
      <div>
        <IG />
        <IG_Text />
      </div>
    </div>
    <div className='remind'>
      <div />
    </div>
  </div>
));
export default Social;
