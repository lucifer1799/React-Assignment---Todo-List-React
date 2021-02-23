import React from "react";
import TodoListItems from "./TodoListItem";

const TodoList = (props) => {
  const items = props.todos.map((todo) => {
    return (
      <TodoListItems
        key={todo.id}
        todo={todo}
        startEditing={props.startEditing}
        finishEditing={props.finishEditing}
        deleteTask={props.deleteTask}
      />
    );
  });
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default TodoList;
