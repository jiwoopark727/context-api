import React, { useCallback, useContext } from 'react';
import { TTodo } from "../../types/todo";
import TodoListItem from "./TodoListItem";
import { TodoContext, TodoContextFn, TodoProvider } from '../../context/TodoProvider';

const TodoList = (
//   {
//   todos,
//   toggleTodo,
//   deleteTodo,
// }: {
//   todos: TTodo[];
//   toggleTodo: (id: number) => void;
//   deleteTodo: (id: number) => void;
// }
) => {
  // console.log("todolist rendering");
  // const memoToggleTodo = useCallback(toggleTodo, []);
  // const memoDeleteTodo = useCallback(deleteTodo, []);
  const { todos } = useContext(TodoContext)!;

  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-hidden">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}/>
          // <TodoListItem
          //   key={todo.id}
          //   todo={todo}
          //   toggleTodo={toggleTodo}
          //   deleteTodo={deleteTodo}
          // />
        ))}
      </ul>
    </>
  );
};
export default React.memo(TodoList);
