import React from "react";
import { useState } from "react";

function Input() {
  const [todo, setTodo] = useState([
    { id: 1, text: "learn web", checked: false },
    { id: 2, text: "get a job", checked: false },
  ]);

  return (
    <div className="flex">
      {todo.map((article) => {
        return (
          <div key={article.id}>
            <h1>{article.text}</h1>
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
        <button
          onClick={() =>
            setTodo([...todo, { id: 1, text: "예시제목", checked: false }])
          }
        >
          데이터 추가하기
        </button>
      </div>
    </div>
  );
}

export default Input;
