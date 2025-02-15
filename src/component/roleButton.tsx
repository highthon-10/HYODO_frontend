import Image from "next/image";
import React from "react";
<<<<<<< HEAD

interface RoleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
  imageSrc: string;
}

export const RoleButton = ({ children, onClick, isSelected, imageSrc }: RoleButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "164px",
        height: "164px",
        border: isSelected ? "2px solid #5CB4EB" : "1px solid #E5E5E5",
        borderRadius: "12px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <Image
        src={imageSrc}
        alt={`${children} 캐릭터`}
        width={100}
        height={120}
        style={{
          marginBottom: "8px",
        }}
      />
      <span
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: isSelected ? "#5CB4EB" : "#000",
        }}
      >
        {children}
      </span>
    </button>
=======
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
>>>>>>> 3b17b4c71510505280a27a0c73ccda2852b8cddc
  );
};
