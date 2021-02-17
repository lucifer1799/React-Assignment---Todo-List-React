import React from "react";

const Add = ({ task, setTask }) => {
  const handleClick = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <textarea
        className="ml-3 mr-2"
        id="task"
        placeholder="Enter the task todo"
        value={task}
        onChange={handleClick}
      ></textarea>
    </>
  );
};

export default Add;
