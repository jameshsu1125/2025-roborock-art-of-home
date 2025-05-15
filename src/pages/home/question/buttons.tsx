import Button from '@/components/button';
import { IReactProps } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useId } from 'react';
import { HomeContext, HomePageType, HomeQuestions } from '../config';
import Click from 'lesca-click';

const SingleButton = memo(({ children, index }: IReactProps & { index: number }) => {
  const id = useId();

  const [{ page, question }, setState] = useContext(HomeContext);
  const [style, setStyle] = useTween({ opacity: 0, y: 0 });
  useEffect(() => {
    if (page === HomePageType.Landing) return;
    if (question >= HomeQuestions.length) return;

    setStyle(
      { opacity: 0, y: 0 },
      {
        duration: 1,
        onEnd: () => {
          setStyle({ opacity: 1, y: 0 }, { duration: 600, delay: 800 + 50 * index });
        },
      },
    );
  }, [question, page]);

  useEffect(() => {
    Click.add(`#${id}`, () => {
      if (question >= HomeQuestions.length) return;
      setState((S) => ({ ...S, question: S.question + 1, answers: [...S.answers, index] }));
    });
  }, [id, question]);

  return (
    <Button id={id} style={style}>
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
