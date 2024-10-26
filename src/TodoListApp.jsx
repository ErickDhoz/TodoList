import { TodoAdd, TodoList } from "./component";
import { useTodo } from "./Hooks/useTodo";

export const TodoListApp = () => {
  const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, todoCount, pendientes, terminadas } =
    useTodo();
 

  return (
    <div>
      <div className="d-flex justify-content-between m-0">
        <h1>Lista de Tareas: {todoCount}</h1>
        <div className="m-0 p-0">
          <h5 className="m-0">
            Tareas Pendientes:{pendientes}
          </h5>
          <h5 className="m-0">
            Tareas Terminadas: {terminadas}
          </h5>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeletedTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </div>
  );
};
