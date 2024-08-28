import ContextCount from './ContextCount';
import ContextOther from './ContextOther';
import { CounterProvider } from '../../context/CounterProvider';


const ContextPage = () => {


  return (
    <>
      <CounterProvider>
        <ContextCount/>        
      </CounterProvider>
    </>
  )
}
export default ContextPage;