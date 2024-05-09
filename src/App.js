import { useEffect, useState } from "react";
import "./App.css";
import Main from "./pages/main/Main";

function App() {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    setTodolist([
      { id: 1, name: "study", bool: false },
      { id: 2, name: "shopping", bool: false },
      { id: 3, name: "work", bool: false },
      { id: 4, name: "gmy", bool: false },
    ]);
  }, []);

  return (
    <div>
      <Main todolist={todolist} setTodolist={setTodolist} />
    </div>
  );
}

export default App;
