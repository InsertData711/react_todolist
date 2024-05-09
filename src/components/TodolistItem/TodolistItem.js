import { React } from "react";
import { Link } from "react-router-dom";

const TodolistItem = ({ todo, toggleBool }) => {
  const { id, name, bool } = todo;

  return (
    <li className="todo">
      <Link to={`/todo/${id}`}>
        <span className="name">{name}</span>
        <input
          className="checkbox"
          type="checkbox"
          checked={bool}
          onChange={() => toggleBool(id)}
        />
      </Link>
    </li>
  );
};

export default TodolistItem;
