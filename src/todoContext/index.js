import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider (props){
   
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      }= useLocalStorage("TODOS_V1", []);
      //STATE
      const defaultTodos = [
  {text:'Complete online javascript course', completed: true},
  {text:'Complete online javascript coursesdfsdfsdfsdf', completed: false},
  {text: 'Complete online javascript coursesdfsdfsdfsdf ', completed: true},
  {text: 'laaaalalalafsdfsdfsdfsdlal ', completed: false}

];
      const [filterValue, setFilterValue]= React.useState("all");
      const [currentFilter, setCurrentFilter] = React.useState('all');
      const [darkMode, setTheme] = React.useState(true);

      


      

      
      const completedTodos= todos.filter(todo=>!!todo.completed).length;
      const totalTodos = todos.length
      const leftTodos = (totalTodos-completedTodos);
      
      let filteredTodos = [];
      
      //FILTER_TODOS
      if (filterValue === "all") {
        filteredTodos = todos;
      } else if (filterValue === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
      } else if (filterValue === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
      }
      
      

      const filterAll = (event) => {
        event.preventDefault();
        setFilterValue("all");
        setCurrentFilter("all");
      };
      const filterActive = (event) => {
        event.preventDefault();
        setFilterValue("active");
        setCurrentFilter("active");

      };
      const filterCompleted = (event) => {
        event.preventDefault();
        setFilterValue("completed");
        setCurrentFilter("completed");

      };



      const setDarkMode = ()=>{
        console.log("holi");
        darkMode==false? setTheme(true):setTheme(false);
      }

      
      const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed == false ? newTodos[todoIndex].completed = true
          : newTodos[todoIndex].completed = false;
          saveTodos(newTodos);
      };
       
      const  deleteTodos= (text)=>{
        const newTodos = todos.filter(todo=>todo.text !== text)
        saveTodos(newTodos)
        };
      
        const addTodo= (text)=>{
          const newTodos= [...todos];
          newTodos.push({
            completed: false,
            text,
          });
          saveTodos(newTodos);
        }
      
  
      const ClearCompleteTodos = (text)=>{
        const newTodos = todos.filter(todo=>!todo.completed);
        saveTodos(newTodos);
      };
        
      //Reorder List

      const reorder =(list, startIndex,endIndex)=>{
        const result = [...list];
        const [removed]= result.splice(startIndex,1);
        result.splice(endIndex,0,removed);
        saveTodos(result);
      }
return(
    <TodoContext.Provider 
    
    value={{
        loading,
        error,
        leftTodos,
        filterAll,
        filterActive,
        filterCompleted,
        ClearCompleteTodos,

        currentFilter,
    
        filteredTodos,
        addTodo,
        toggleCompleteTodo,
        deleteTodos,

        setDarkMode,
        darkMode,
        reorder,
    

    }}>
        {props.children}
    </TodoContext.Provider>


);

}

export {TodoContext,TodoProvider}
