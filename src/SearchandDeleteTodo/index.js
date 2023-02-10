import React from 'react';
import './SearchandDeleteTodo.css';
import { Filter } from '../Filter';
import { TodoCounter } from '../TodoCounter';
import { ClearCompleteTodo } from '../ClearCompleteTodo';
const SearchandDeleteTodo = (props, ) => {
    return (
        <li className="options">
        <TodoCounter   
        />

            <Filter



            />

        <ClearCompleteTodo/>

        </li>
    );
}

export {SearchandDeleteTodo};