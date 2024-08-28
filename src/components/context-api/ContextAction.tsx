import React, { useContext } from 'react';
import { CounterContextFn } from '../../context/CounterProvider';

const ContextAction = () => {
  console.log("액션 렌더링");
  const {increment, decrement} =  useContext(CounterContextFn)!;
  return (
    <>
      <div>ContextAction Component</div>
      <button onClick={increment}>증가</button>
      <br/>
      <button onClick={decrement}>감소</button>
    </>
  )
}
export default React.memo(ContextAction);