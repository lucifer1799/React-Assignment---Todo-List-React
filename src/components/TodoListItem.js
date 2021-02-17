import React from "react";

const TodoListItems = (props) => {
  let TodoValue = props.todo.value;
  const startEditing = () => {
    props.startEditing(props.todo.id);
  };

  function changeTodoValue(event) {
    TodoValue = event.target.value;
  }
  function finishEditing() {
    if (TodoValue) {
      props.todo.value = TodoValue;
      props.todo.isEditing = false;
      props.finishEditing(props.todo);
    }
  }

  function deleteTask() {
    props.deleteTask(props.todo.id);
  }

  return (
    <div>
      <li className="list">
        {props.todo.isEditing ? (
          <>
            <textarea
              className="editTask"
              onChange={changeTodoValue}
              defaultValue={TodoValue}
            ></textarea>
            <button className="saveTask" onClick={finishEditing}>
              Update Task
            </button>
          </>
        ) : (
          <>
            {props.todo.isEditing}
            {props.todo.value} (
            <button className="edit" onClick={startEditing}>
              Edit
            </button>{" "}
            |{" "}
            <button className="delete" onClick={deleteTask}>
              Delete
            </button>{" "}
            )
          </>
        )}
      </li>
    </div>
  );
};

export default TodoListItems;
