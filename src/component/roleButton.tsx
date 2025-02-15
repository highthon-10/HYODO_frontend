import React from "react";
import { roleButtonStyle } from "./roleButton.css";

interface RoleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isSelected?: boolean;
}

export const RoleButton = ({ children, isSelected, ...props }: RoleButtonProps) => {
  return (
    <button
      className={roleButtonStyle}
      style={{
        backgroundColor: isSelected ? "#5CB4EB" : "#E9E8E7",
        color: isSelected ? "#fff" : "#3B3B3B",
      }}
      {...props}
    >
      {children}
    </button>
  );
};
