import React, { useState } from 'react';
import './TodoItem.css';
import iconCheck from '../assets/iconCheck.svg'
import iconCross from '../assets/iconCross.svg'
import { Draggable } from '@hello-pangea/dnd';


const TodoItem = (props) => {
  const [showDelete, setShowDelete] = useState(false);

  const onMouseEnter = () => {
    setShowDelete(true);
  };

  const onMouseLeave = () => {
    setShowDelete(false);
  };

  // const onComplete = ()=>{
  //     alert("completaste el todo" + props.text);
  // }
  // const onDelete = ()=>{
  //     alert("borraste el todo" + props.text);
  // }
  return (
    <Draggable key={props.text} draggableId={props.text} index={props.index}>
   {(draggableProvided)=>( <li {...draggableProvided.draggableProps} 
   ref={draggableProvided.innerRef}
   {...draggableProvided.dragHandleProps}
   className='TodoItem' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >  
        <img
          className={`img ${props.completed && 'img-active'}`}
          src={iconCheck}
          alt="icon-check"
          title=""
        />
      </span>

      <p  className={`textItem-p ${props.completed &&  'TextItem-p--completed'}`}>
        {props.text}  
      </p>
      <span
        className={`x ${showDelete ? 'x--visible' : ''}`}
        onClick={props.onDelete}
      >
        <img
            src={iconCross}
            alt="Moon button to turn on dark mode"
            title="Turn on dark mode"
          />
      </span>
    </li>)}
    </Draggable>
  );
}
export {TodoItem};