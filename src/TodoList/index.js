import React from 'react';
import { SearchandDeleteTodo } from '../SearchandDeleteTodo';
import { TodoContext } from '../todoContext';
import './TodoList.css';
const TodoList = (props) => {
    const {darkMode}= React.useContext(TodoContext);
    return (
        
        <section 
        
        
        className={`${darkMode===false ? "lightMode container-list":"darkMode container-list"} `}>
            <ul>
                {props.children}
            </ul>
            <SearchandDeleteTodo


            />
        </section>
        
    );
}

export  {TodoList};