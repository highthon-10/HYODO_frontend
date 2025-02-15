import React from "react";
import * as s from "./roleButton.css";
import Image from "next/image";
import * as Child from "../page/Child.png";
import * as Parent from "../page/Parent.png";

interface RoleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export const RoleButton = ({
  children,
  isSelected,
  onClick,
}: RoleButtonProps) => {
  return (
    <div className={s.container} onClick={onClick}>
      <div
        className={s.image}
        style={{
          backgroundColor: isSelected ? "#CAEBFF" : "#fff",
          color: isSelected ? "#fff" : "#3B3B3B",
        }}
      >
        <Image src={children === "부모" ? Parent : Child} alt="사진" />
      </div>
      {children}
    </div>
  );
};
