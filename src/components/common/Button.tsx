import "./Button.scss";
import React from "react";

interface prop {
  children: React.ReactNode;
  onClick?: () => void;
  alt?: boolean;
}

const Button = function ({ children, onClick, alt }: prop) {
  return (
    <button className={`button${alt ? "-alt" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
