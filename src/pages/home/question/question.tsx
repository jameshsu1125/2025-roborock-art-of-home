import { memo, useContext, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { HomeContext, HomePageType, HomeQuestions } from '../config';
import useTween from 'lesca-use-tween';

const Questions = memo(() => {
  const [{ page, question }] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, y: 100 });

  useEffect(() => {
    if (page === HomePageType.Landing) return;
    if (question >= HomeQuestions.length) return;

    setStyle(
      { opacity: 0, y: 100 },
      {
        duration: 1,
        onEnd: () => {
          setStyle({ opacity: 1, y: 0 }, { duration: 600, delay: 500 });
        },
      },
    );
  }, [page, question]);

  return (
    <div
      className={twMerge(
        'Questions animate-fadeIn',
        `q${Math.min(question, HomeQuestions.length - 1)}`,
      )}
    >
      <div style={style} />
    </div>
  );
});
export default Questions;
