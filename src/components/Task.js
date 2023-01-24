import React from "react";

function Task({key, input, category,deleteData}) {
  
  function onClick(event){
    deleteData(input)
  }
}
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{input}</div>
      <button className="delete" onClick={onClick}>X</button>
    </div>
  );
}

export default Task;
