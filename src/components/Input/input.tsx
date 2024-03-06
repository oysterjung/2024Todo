import React from "react";

function Input() {
  return (
    <div className="flex">
      <div>TODO LIST</div>
      <div>
        <input type="text" />
        <select name="한일" id="한일">
          <option value="All">All</option>
          <option value="Done">Done</option>
          <option value="Ing">Ing</option>
        </select>
        <button>달</button>
      </div>
    </div>
  );
}

export default Input;
