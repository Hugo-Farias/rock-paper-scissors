import "./Button.scss";
import React from "react";

interface prop {
  children: React.ReactNode;
}

const Button = function ({ children }: prop) {
  return <button className="button">{children}</button>;
};

export default Button;
