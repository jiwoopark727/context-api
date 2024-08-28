import React from 'react';

const UseCallbackDisplay = ({count, title}:{count: {count:number}; title:string; setCount: ()=>void; fruits: string[]}) => {
  console.log(title);
  return (
    <>
      <div>Count: {count}</div>
    </>
  )
}
export default React.memo(UseCallbackDisplay);