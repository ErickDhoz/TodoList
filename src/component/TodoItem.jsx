import React from "react";

export const TodoItem = ({ todo, onDeletedTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>

      <button
        className="btn btn-outline-danger"
        onClick={() => onDeletedTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
