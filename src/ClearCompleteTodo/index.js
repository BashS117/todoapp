import React from 'react';
import { TodoContext } from '../todoContext';
import './ClearCompleteTodo.css'
const ClearCompleteTodo = () => {
    const {ClearCompleteTodos} = React.useContext(TodoContext);
    return (
        <span
        className='clear-completed-todo'
        onClick={ClearCompleteTodos}
        >
            Clear Completed</span>
    );
}

export {ClearCompleteTodo};