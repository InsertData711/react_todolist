import { React } from "react";

const Todo = ({ todo, toggleBool }) => {
  const { id, name, bool } = todo;

  return (
    <li className="todo">
      <span className="name">{name}</span>
      <input
        className="checkbox"
        type="checkbox"
        checked={bool}
        onChange={() => toggleBool(id)}
      />
    </li>
  );
};

export default Todo;
