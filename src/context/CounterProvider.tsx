// 1.컨텍스트 공급자 컴포넌트 객체를 생성한다 -> createContext 함수 사용
// 2. 공급자 범위 지정

import React, { createContext, useCallback, useMemo, useState } from 'react';

type CounterContextType =  { 
  count: number; 
}

type CounterContextFnType =  { 
  increment: () => void; 
  decrement: () => void; 
}

export const CounterContext = 
createContext<CounterContextType | null>(null); //count

export const CounterContextFn =
createContext<CounterContextFnType | null>(null); //increment decrement

export const CounterProvider = ({
  children,
}:{
  children: React.ReactNode;
})=>{
  const [count, setCount] = useState(0);
  const increment = useCallback(()=>{setCount((count)=>count+1)}, []);
  const decrement = useCallback(()=>{setCount((count)=>count-1)}, []);

  const memoFn = useMemo(()=>( {increment, decrement} ), [])
  return (
    <CounterContextFn.Provider value={memoFn}>
      <CounterContext.Provider value={{count}}>
        {children}
      </CounterContext.Provider>
    </CounterContextFn.Provider>
  )
}