import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteData}) {

  const tasklist = tasks.map((task) => (
    <Task
    key={task.input}
    input={task.input}
    category={task.category}
    deleteData={deleteData}
    />
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasklist}
    </div>
  );
}

export default TaskList;
