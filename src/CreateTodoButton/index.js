import React from 'react';
import { TodoContext } from '../todoContext';
import './CreateTodoButton.css'
function CreateTodoButton () {
const [newTodoValue, setNewTodoValue]= React.useState('');
  const {addTodo,completed}= React.useContext(TodoContext);

  const onSubmit = (event)=>{
    event.preventDefault();

    addTodo(newTodoValue);
  }

  const onChange=(event)=>{
    setNewTodoValue(event.target.value)

  };




    return (
      <form 
      className='CreateTodo'
      onSubmit={onSubmit}
      >
        <div 
        className={`CreateIcon  ${completed && 'Icon-check--active'}`}
        onClick={onSubmit}
        type="submit"
        >
        </div>

        <input 
        value ={newTodoValue}
        onChange={onChange}
        className="content-new"
          placeholder="Create a new todo..."/>
      </form>
 
    
 
    );
}

export {CreateTodoButton};