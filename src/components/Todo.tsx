import React from "react";

const Todo: React.FC<{ onClick(): void; completed: boolean; text: string }> = ({
  onClick,
  completed,
  text
}) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <li
    onClick={onClick}
    onKeyPress={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);

export default Todo;
