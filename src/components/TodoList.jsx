const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            color: todo.completed ? "blue" : "red",
          }}
        >
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
