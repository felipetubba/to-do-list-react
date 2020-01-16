import React, { useState } from "react";

import "./TodoList.css";

function TodoList(props) {
  const [tarefas, setTarefas] = useState([]);
  const [item, setItem] = useState("");

  function incrementTask() {
    setTarefas(tarefas.concat(item));
    console.log(tarefas);
  }

  return (
    <div className="todoListMain">
      <h1>{props.title}</h1>
      <div className="add">
      <input
        type="text"
        name="item"
        id="item"
        onChange={e => setItem(e.target.value)}
      />
      <button onClick={incrementTask}>Add Item</button>
    </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
