import React from "react";
import "./Main.css";
import Todo from "../../components/Todo";

const Main = ({ todolist, setTodolist }) => {
  const toggleBool = (id) => {
    setTodolist((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, bool: !item.bool } : item
      )
    );
  };

  return (
    <ul className="todolist">
      {todolist.map((todo) => (
        <Todo todo={todo} key={todo.id} toggleBool={toggleBool} />
      ))}
    </ul>
  );
};

export default Main;
