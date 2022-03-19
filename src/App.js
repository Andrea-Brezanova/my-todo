import "./index.css";
import { useState } from "react";
import Task from "./Components/Task.js";
import TaskItem from "./Components/TaskItem.js";


export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Study REACT" },
    { id: 2, title: "Study DOM" },
    { id: 3, title: "Jump in Spree" }
  ]);

  const [value, setValue] = useState("");
  const [id, setId] = useState(3);

  const addTodo = () => {
    setTodos([...todos, { title: value, id: id }]);
    setId(id + 1);
  };

  return (
    <div className="App">
      <h1> Todo List</h1>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button onClick={addTodo} />
      <Task todos={todos} setTodos={setTodos} />
      <TaskItem />
    </div>
  );
}
