import { IReactProps } from '@/settings/type';
import Regular from './regular';
import Question from './question';

type TRegularProps = IReactProps & {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Button = ({ id, children, className, style, onClick }: TRegularProps) => {
  return (
    <button id={id} className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

Button.Regular = Regular;
Button.Question = Question;

export default Button;
