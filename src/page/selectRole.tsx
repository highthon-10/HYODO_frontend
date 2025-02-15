"use client";

import React, { useState } from "react";
import {
  bottomButtonStyle,
  buttonContainerStyle,
  contentStyle,
  header,
  headerTitle,
  highlightStyle,
  line,
  messageStyle,
  pageStyle,
} from "./joinPage.css";

import { Button } from "@/component/nextButton";
import { RoleButton } from "@/component/roleButton";
import { useRouter } from "next/navigation";
import LeftArrow from "@/app/child/diary/write/LeftArrow";

export const SelectRolePage = () => {
  const router = useRouter();
  const [role, setRole] = useState<string | null>(null);
  console.log(role);
  const selectRole = (role: string) => {
    setRole(role);
  };

  const handleNext = () => {
    router.push("/join-code");
  };

  return (
    <div className={pageStyle}>
      <div className={header}>
        <LeftArrow
          onClick={() => {
            router.back();
          }}
        />
        <p className={headerTitle}>역할 선택</p>
        <div className={line} />
      </div>

      <div className={contentStyle}>
        <p className={messageStyle}>
          반가워요!
          <br />
          <span className={highlightStyle}>Hyodo</span>는 처음이시죠?
          <br />
          <br />
          부모와 자녀 중 선택해 주세요!
        </p>

        <div className={buttonContainerStyle}>
<<<<<<< HEAD
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <RoleButton
              onClick={() => selectRole("부모")}
              isSelected={role === "부모"}
              imageSrc="/images/Parent.png"
            ></RoleButton>
            <span
              style={{
                marginTop: "8px",
                fontSize: "18px",
                fontWeight: "600",
                color: role === "부모" ? "#5CB4EB" : "#000",
              }}
            >
              부모
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <RoleButton
              onClick={() => selectRole("자녀")}
              isSelected={role === "자녀"}
              imageSrc="/images/Child.png"
            ></RoleButton>
            <span
              style={{
                marginTop: "8px",
                fontSize: "18px",
                fontWeight: "600",
                color: role === "자녀" ? "#5CB4EB" : "#000",
              }}
            >
              자녀
            </span>
          </div>
=======
          <RoleButton
            onClick={() => selectRole("부모")}
            isSelected={role === "부모"}
          >
            부모
          </RoleButton>
          <RoleButton
            onClick={() => selectRole("자녀")}
            isSelected={role === "자녀"}
          >
            자녀
          </RoleButton>
>>>>>>> 3b17b4c71510505280a27a0c73ccda2852b8cddc
        </div>
      </div>

      <div className={bottomButtonStyle}>
        <Button
          disabled={!role}
          onClick={handleNext}
          style={{
            backgroundColor: role ? "#5CB4EB" : "#D9D9D9",
            color: role ? "#fff" : "#666666",
            borderRadius: "12px",
            height: "56px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
