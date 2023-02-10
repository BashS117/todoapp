import React from 'react';
import { TodoContext } from '../todoContext';
import './TodoCounter.css';

const TodoCounter = () => {
    const {leftTodos}= React.useContext(TodoContext);
    
    return (
        <h2 className='TodoCounter'>{leftTodos} items left</h2>
    );
}

export {TodoCounter};