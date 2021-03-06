import React from "react";

const VisibilityButton: React.FC<{ active: boolean; onClick(): void }> = ({
  active,
  children,
  onClick
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default VisibilityButton;
