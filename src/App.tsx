import { useState } from "react";
import "./App.css";
import Input from "./components/Input/input";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input />
    </>
  );
}

export default App;
