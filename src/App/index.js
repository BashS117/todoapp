import React from "react";
import { AppUI } from "./AppUI";
import {TodoProvider} from '../todoContext';
// const defaultTodos = [
//   {text:'Complete online javascript course', completed: true},
//   {text:'Complete online javascript coursesdfsdfsdfsdf', completed: false},
//   {text: 'Complete online javascript coursesdfsdfsdfsdf ', completed: true},
//   {text: 'laaaalalalafsdfsdfsdfsdlal ', completed: false}

// ];
function App() {
// console.log("render antes de useEf")
// React.useEffect(()=>{
// console.log("use efecft");
// }, [totalTodos])

// console.log("render luego de UUSEefect");
  return (
    <TodoProvider >
      
      <AppUI 
      />
    </TodoProvider>
  );
}

export default App;
