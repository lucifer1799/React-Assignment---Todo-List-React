import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoContainer = () => {
  let [todos, setTodos] = React.useState([]);

  const getNewid = () => {
    let id = 0;

    todos.forEach((todo) => {
      if (todo.id > id) id = todo.id;
      
    });

    return id + 1;
  };
  const addTask = (newTodo) => {
    const newTodoObj = {
      id: getNewid(),
      value: newTodo,
      isEditing: false
    };

    const updatedTodo = [...todos, newTodoObj];
    setTodos(updatedTodo);
  };

  function deleteTask(todo_id){
    const filter_array = todos.filter((todo) => todo_id !== todo.id);
    setTodos(filter_array);
  };
  function startEditing(todo_id){
    const editing_array = todos.map((item) => {
      if (item.id === todo_id) item.isEditing = true;
      return item;
    });
    setTodos(editing_array);
  };

  function finishEditing(todo) {
    const editing_array = todos.map((item) => {
      if (item.id === todo.id) return todo;
      return item;
    });

    setTodos(editing_array);
  };
  return (
    <div>
      <TodoAdd addTask={addTask} />
      <TodoList
        todos={todos}
        startEditing={startEditing}
        finishEditing={finishEditing}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TodoContainer;
