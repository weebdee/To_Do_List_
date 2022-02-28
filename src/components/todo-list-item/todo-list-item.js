import React from 'react';
import './todo-list-item.css';


const TodoListItem = ({ id, label, important, done, onDelete, onImportant, onDone}) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration: done? 'line-through' : 'none',
  };

  return (
    <span className="todo-list-item">
      <span
        onClick={() => onDone(id)}
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button onClick={() => onImportant(id)} type="button" className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button onClick={() => onDelete(id)} type="button" className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};


export default TodoListItem;
