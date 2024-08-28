import { useState } from 'react';
import Todo from "./components/todo-publish/Todo";
import Value from './learn/Value';
import UseTransition from './react-hook/UseTransition';
import Memorization from './components/memorization/Memorization';
import UseCallback from './components/memorization/usecallback/Usecallback';
import ContextPage from './components/context-api/ContextPage';


export default function App() {
  // //state lipting
  // const [value, setValue] = useState('');
  // const [value2, setValue2] = useState('');
  
  return (
    <>
      <Todo />
      {/* <UseTransition></UseTransition> */}
      {/* <UseCallback></UseCallback> */}
      {/* <ContextPage></ContextPage> */}
    </>
  );
}
