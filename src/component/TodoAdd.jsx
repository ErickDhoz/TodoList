import React from "react";
import { useForm } from "../Hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFornSubmit = (event) => {
    event.preventDefault();
    if (description <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };
    onNewTodo && onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFornSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Nueva Tarea a realizar"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button className="btn btn-outline-primary mt-2" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
