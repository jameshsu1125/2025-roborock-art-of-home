import { memo, useContext, useEffect, useRef } from 'react';
import { HomeContext } from '../config';

const Images = memo(({ index }: { index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ question }] = useContext(HomeContext);

  useEffect(() => {
    if (question === index) ref.current?.style.setProperty('opacity', '1');
    else ref.current?.style.setProperty('opacity', '0');
  }, [question]);

  return <div ref={ref} />;
});

const Background = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Background'>
      {[...new Array(5).keys()].map((index, i) => (
        <Images key={i} index={index} />
      ))}
    </div>
  );
});
export default Background;
