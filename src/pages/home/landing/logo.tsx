import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { HomeContext } from '../config';

const Logo = memo(() => {
  const [{ step }] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, y: 100 });

  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 300);
  }, [step]);

  return <div className='logo' style={style} />;
});
export default Logo;
