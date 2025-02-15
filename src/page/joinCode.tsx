"use client";

import React, { useState } from "react";
import {
  backButtonStyle,
  bottomButtonStyle,
  contentStyle,
  header,
  headerStyle,
  headerTitle,
  line,
  pageStyle,
  titleStyle,
} from "./joinPage.css";

import { Button } from "@/component/nextButton";
import { useRouter } from "next/navigation";
import LeftArrow from "@/app/child/diary/write/LeftArrow";

export const JoinCodePage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

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
