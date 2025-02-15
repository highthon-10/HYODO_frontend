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
        </div>
      </div>

      <div className={bottomButtonStyle}>
        <Button
          disabled={!role}
          onClick={handleNext}
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
