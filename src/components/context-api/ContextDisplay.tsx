import { useContext } from 'react';
import { CounterContext } from '../../context/CounterProvider';

const ContextDisplay = () => {
  console.log("디스플레이 렌더링");
  const {count} = useContext(CounterContext)!;
  return (
    <>
      <div>ContextDisplay Component</div>
      <h1>Count: {count}</h1>
    </>
  )
}
export default ContextDisplay;