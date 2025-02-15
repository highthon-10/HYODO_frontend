"use client";

import React, { useState } from "react";
import { backButtonStyle, bottomButtonStyle, contentStyle, headerStyle, pageStyle, titleStyle } from "./joinPage.css";

import { Button } from "@/component/nextButton";
import { useRouter } from "next/navigation";

export const JoinCodePage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  return (
    <div className={pageStyle}>
      <header className={headerStyle}>
        <button className={backButtonStyle} onClick={() => router.push("/select-role")}>
          ←
        </button>
        <h1 className={titleStyle}>참여 코드 입력</h1>
      </header>

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
