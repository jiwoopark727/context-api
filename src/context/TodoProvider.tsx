import { createContext, useCallback, useMemo, useState } from 'react'
import { TTodo } from '../types/todo'

type TodoContextType = {
  todos: TTodo[],
}

type TodoContextFnType = {
  addTodo: (text:string)=>void;
  toggleTodo: (id:number)=>void;
  deleteTodo: (id:number)=>void;
}

export const TodoContext =
createContext<TodoContextType | null>(null);  //todos

export const TodoContextFn =
createContext<TodoContextFnType | null>(null);  // addtodo, toggletodo, deletetodo

export const TodoProvider = ({
  children
}:{
  children: React.ReactNode
})=>{
  const [todos, setTodos] = useState<TTodo[]>([]);

  const addTodo = (text: string) => {
    setTodos((todos) => [
      ...todos,
      { id: Math.random(), text, isCompleted: false },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const memoFn = useMemo(()=>({addTodo, toggleTodo, deleteTodo}), [])

  return(
    <TodoContextFn.Provider value={memoFn}>
      <TodoContext.Provider value={{todos}}>
        {children}
      </TodoContext.Provider>
    </TodoContextFn.Provider>
  )
}