import React from "react";

const Todo: React.FC<{ onClick(): void; completed: boolean; text: string }> = ({
  onClick,
  completed,
  text
}) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </button>
);

export default Todo;
