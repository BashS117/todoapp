import React from 'react';
import { TodoContext } from '../todoContext';
import './Filter.css';

const Filter = () => {
  const {filterCompleted, filterAll, filterActive,currentFilter
  } = React.useContext(TodoContext);

  
  return (
    <section className="content-options">
      <a
        className={`content-options_all ${currentFilter === "all" ? "content-options_all--active" : "content-options--inactive"}`}
        href="/"
        onClick={filterAll}
      >
        All
      </a>
      <a
        className={`content-options_active ${currentFilter === "active" ? "content-options_all--active" : "content-options--inactive"}`}
        href="/"
        onClick={filterActive}
      >
        Active
      </a>
      <a
        className={`content-options_completed ${currentFilter === "completed" ? "content-options_all--active" : "content-options--inactive"}`}
        href="/"
        onClick={filterCompleted}
      >
        Completed
      </a>
    </section>
  );
};

export { Filter };