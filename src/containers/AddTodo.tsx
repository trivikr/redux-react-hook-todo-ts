import React, { useState } from "react";
import { addTodo } from "../store/todos/actions";
import { useDispatch } from "redux-react-hook";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addTodo(todo));
          setTodo("");
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
