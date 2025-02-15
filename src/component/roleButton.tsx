import Image from "next/image";
import React from "react";

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
  );
};
