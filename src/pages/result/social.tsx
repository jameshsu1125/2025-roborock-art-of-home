import useTween from 'lesca-use-tween';
import UserAgent, { UserAgentType } from 'lesca-user-agent';
import { memo, useContext, useEffect } from 'react';
import { ResultContext, ResultStepType } from './config';

const message =
  UserAgent.get(false) === UserAgentType.Mobile ? '請長按下載圖片或截圖分享' : '請右鍵圖片下載圖片';

const FB_IG = memo(() => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });
  const [{ step }] = useContext(ResultContext);

  useEffect(() => {
    if (step === ResultStepType.FadeIn) {
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: 300, onEnd: () => alert(message) });
    }
  }, [step]);

  return <div className='fb-ig' style={style} />;
});

const Social = memo(() => (
  <div className='Social'>
    <FB_IG />
    <div className='remind'>
      <div />
    </div>
  </div>
));
export default Social;
