"use client";

import React, { useState } from "react";
import { bottomButtonStyle, contentStyle, header, headerTitle, line, pageStyle } from "./joinPage.css";

import { Button } from "@/component/nextButton";
import LeftArrow from "@/app/child/diary/write/LeftArrow";
import { useRouter } from "next/navigation";

export const JoinCodePage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleComplete = () => {
    router.push(`/${localStorage.getItem("role")}`);
  };

  return (
    <div className={pageStyle}>
      <div className={header}>
        <LeftArrow
          onClick={() => {
            router.back();
          }}
        />
        <p className={headerTitle}>참여 코드 입력</p>
        <div className={line} />
      </div>

      <div className={contentStyle}>
        <p>참여 코드를 입력해 주세요!</p>
        <div>
          <label>참여 코드</label>
          <input
            type="text"
            placeholder="ex) ABCDE"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #E9E8E7",
              marginTop: "8px",
            }}
          />
        </div>
      </div>

      <div className={bottomButtonStyle}>
        <Button
          disabled={!code}
          onClick={handleComplete}
          style={{
            backgroundColor: code ? "#5CB4EB" : "#ccc",
            color: code ? "#fff" : "#000",
          }}
        >
          완료
        </Button>
      </div>
    </div>
  );
};
