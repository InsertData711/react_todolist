import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Todo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div>todolist ID: {id}</div>
      <button onClick={() => navigate(-1)}>goBack</button>
    </>
  );
};
