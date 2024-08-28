import { useCallback, useState } from 'react';
import UseCallbackDisplay from './UseCallbackDisplay';
import UseCallbackAction from './UseCallbackAction';


const fn = new Set();

const fruits = ['apple','banana','cherry']

const UseCallback = () => {
  const [count, setCount] = useState({count:0});
  const [count2, setCount2] = useState({count: 0});

  //useCallback(()=>{})

  const increment = useCallback(() => {
    setCount((count) => ({count: count.count + 1}));
  },[]);
  const decrement = useCallback(() => {
    setCount((count) => ({count: count.count - 1}));
  },[]);
  
  fn.add(increment);
  fn.add(decrement);
  return (
    <>
      <div>Usecallback Component</div>
      <UseCallbackDisplay count={count} title='count rendering' setCount={setCount} fruits={fruits}></UseCallbackDisplay>
      <UseCallbackDisplay count={count2} title='count2 rendering' setCount={setCount2} fruits={fruits}></UseCallbackDisplay>
      <UseCallbackAction increment={increment} decrement={decrement}></UseCallbackAction>
    </>
  )
}
export default UseCallback;