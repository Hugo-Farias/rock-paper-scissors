import "./Button.scss";
import React from "react";

interface prop {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = function ({ children, onClick }: prop) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
