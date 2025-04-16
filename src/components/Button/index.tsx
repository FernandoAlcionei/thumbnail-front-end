import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled }: Props) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="disabled:cursor-default disabled:opacity-40 hover:cursor-pointer hover:opacity-80"
  >
    { children }
  </button>
);

export default Button;
