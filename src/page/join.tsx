"use client";

import React, { useState } from "react";
import {
  backButtonStyle,
  bottomButtonStyle,
  buttonContainerStyle,
  contentStyle,
  headerStyle,
  highlightStyle,
  messageStyle,
  pageStyle,
  titleStyle,
} from "./joinPage.css";

import { Button } from "@/component/nextButton";
import { RoleButton } from "@/component/roleButton";

export const JoinPage = () => {
  const [role, setRole] = useState<string | null>(null);

  const selectRole = (role: string) => {
    setRole(role);
  };

  return (
    <div className={pageStyle}>
      <header className={headerStyle}>
        <button className={backButtonStyle}>←</button>
        <h1 className={titleStyle}>역할 선택</h1>
      </header>

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
          <RoleButton onClick={() => selectRole("부모")} isSelected={role === "부모"}>
            부모
          </RoleButton>
          <RoleButton onClick={() => selectRole("자녀")} isSelected={role === "자녀"}>
            자녀
          </RoleButton>
        </div>
      </div>

      <div className={bottomButtonStyle}>
        <Button
          disabled={!role}
          style={{
            backgroundColor: role ? "#5CB4EB" : "#ccc",
            color: role ? "#fff" : "#000",
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
