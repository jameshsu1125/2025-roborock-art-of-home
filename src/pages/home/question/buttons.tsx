import Button from '@/components/button';
import { memo, useEffect } from 'react';

const Buttons = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Buttons'>
      <Button>asd</Button>
    </div>
  );
});
export default Buttons;
