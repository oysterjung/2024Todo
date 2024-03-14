import React from "react";
import { useState } from "react";

function Input() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="flex">
      {todo.map((article) => {
        return (
          <div key={article}>
            <h1>{article}</h1>
          </div>
        );
      })}
      <div>TODO LIST</div>
      <div>
        <input type="text" />
        <select name="한일" id="한일">
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Ing">Ing</option>
        </select>
        <button>달</button>
        <button onClick={() => setTodo([])}>데이터 추가하기</button>
      </div>
    </div>
  );
}

export default Input;
