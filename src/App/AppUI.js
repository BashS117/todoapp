import React from 'react';

import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import {TodoList} from "../TodoList";

import {Header} from "../Header";
import { Footer } from "../Footer";

import { TodoContext } from '../todoContext';
import { DragDropContext } from '@hello-pangea/dnd';
function AppUI () {



 const {
  error,
  loading,
  filteredTodos,
  toggleCompleteTodo,
  deleteTodos,
  reorder,
  darkMode,
  }= React.useContext(TodoContext);


    return (
        <React.Fragment 
        >
      <Header />

      <main className="container ">
        {/* <input placeholder="cebolla" /> */}
        <CreateTodoButton/>
      <DragDropContext onDragEnd={(result)=>{
        console.log(result)
        const {source, destination}= result;
        if(!destination){
          return;
        }
        if(source.index === destination.index
          && source.droppableId === destination.droppableId){
          return;
        }
    reorder(filteredTodos,source.index,destination.index)
     }   }>
             <TodoList          
          //  leftTodos={leftTodos}
           // filterAll={filterAll}
           // filterActive={filterActive}
           // filterCompleted={filterCompleted}
           // ClearCompleteTodos={ClearCompleteTodos}
              >
               {error && <p>hubo un error</p>}
               {loading && <p>Estamos cargando no desesperes</p>}
               {(!loading && !filteredTodos.length) && <p>Crea tU primer ToDo</p>}
  
             {filteredTodos.map((todo, index) => (
              <TodoItem 
              index={index}
              key={todo.text}
               text={todo.text} 
               completed={todo.completed}
               onComplete={()=>toggleCompleteTodo(todo.text)}
               onDelete={()=>deleteTodos(todo.text)}
               />
             ))}
           </TodoList>
           </DragDropContext>
      </main>
      <Footer />


    </React.Fragment>
    );
}

export {AppUI};