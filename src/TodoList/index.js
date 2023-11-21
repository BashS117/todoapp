import React from 'react';
import { SearchandDeleteTodo } from '../SearchandDeleteTodo';
import { TodoContext } from '../todoContext';
import { Droppable } from '@hello-pangea/dnd';


import './TodoList.css';
const TodoList = (props) => {
    const {darkMode}= React.useContext(TodoContext);
    return (
        
       
        <section 
        className={`${darkMode===false ? "lightMode container-list":"darkMode container-list"} `}>
         <Droppable droppableId='tasks'>
              { (droppableProvided)=> ( 
              <ul {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
              >
                {props.children}
                {droppableProvided.placeholder}
            </ul>) }
            </Droppable>   
            <SearchandDeleteTodo


            />
        </section>
        
    );
}

export  {TodoList};