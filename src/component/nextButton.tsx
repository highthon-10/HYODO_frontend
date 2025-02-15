import React from "react";
import { buttonStyle } from "./nextbutton.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
};
