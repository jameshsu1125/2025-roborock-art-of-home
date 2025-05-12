import { memo, useEffect } from 'react';

const Btns = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Btns'>
      <button className='btn-0'>
        <div />
      </button>
      <button className='btn-1'>
        <div />
      </button>
      <button className='btn-2'>
        <div />
      </button>
    </div>
  );
});
export default Btns;
