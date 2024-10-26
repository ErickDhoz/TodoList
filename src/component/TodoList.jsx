import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeletedTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeletedTodo={onDeletedTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
