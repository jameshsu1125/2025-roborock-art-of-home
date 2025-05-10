import Button from '@/components/button';
import { IReactProps } from '@/settings/type';
import { memo, useContext, useEffect } from 'react';
import { HomeContext, HomePageType, HomeQuestions } from '../config';
import useTween from 'lesca-use-tween';

const SingleButton = memo(({ children, index }: IReactProps & { index: number }) => {
  const [{ page, question }, setState] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, y: 100 });
  useEffect(() => {
    if (page === HomePageType.Landing) return;
    if (question >= HomeQuestions.length) return;

    setStyle(
      { opacity: 0, y: 100 },
      {
        duration: 1,
        onEnd: () => {
          setStyle({ opacity: 1, y: 0 }, { duration: 600, delay: 800 + 50 * index });
        },
      },
    );
  }, [question, page]);
  return (
    <Button
      style={style}
      onClick={() => {
        if (question >= HomeQuestions.length) return;
        setState((S) => ({ ...S, question: S.question + 1, answers: [...S.answers, index] }));
      }}
    >
      <Button.Question>{children}</Button.Question>
    </Button>
  );
});

const Buttons = memo(() => {
  const [{ question }] = useContext(HomeContext);
  return (
    <div className='Buttons animate-fadeIn'>
      {HomeQuestions[Math.min(question, HomeQuestions.length - 1)]?.map((text, i) => {
        return (
          <SingleButton key={text} index={i}>
            {text}
          </SingleButton>
        );
      })}
    </div>
  );
});
export default Buttons;
