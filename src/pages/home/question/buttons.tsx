import Button from '@/components/button';
import { IReactProps } from '@/settings/type';
import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useId } from 'react';
import { HomeContext, HomePageType, HomeQuestions } from '../config';
import Gtag from 'lesca-gtag';

const SingleButton = memo(
  ({
    children,
    index,
    text,
    questionIndex,
  }: IReactProps & { index: number; text: string; questionIndex: number }) => {
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
        Gtag.event(`問題${questionIndex + 1}`, text);
      });
    }, [id, question]);

    return (
      <Button id={id} style={style}>
        <Button.Question>{children}</Button.Question>
      </Button>
    );
  },
);

const Buttons = memo(() => {
  const [{ question }] = useContext(HomeContext);
  return (
    <div className='Buttons animate-fadeIn'>
      {HomeQuestions[Math.min(question, HomeQuestions.length - 1)]?.map((text, i) => {
        return (
          <SingleButton key={text} index={i} text={text} questionIndex={question}>
            {text}
          </SingleButton>
        );
      })}
    </div>
  );
});
export default Buttons;
