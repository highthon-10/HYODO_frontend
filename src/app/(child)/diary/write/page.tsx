"use client";

import React from "react";
import * as s from "./style.css";
import LeftArrow from "@/app/(child)/diary/write/LeftArrow";
import { useRouter } from "next/navigation";

const DiaryWritePage = () => {
  const router = useRouter();
  return (
    <div className={s.container}>
      <div className={s.header}>
        <LeftArrow
          onClick={() => {
            router.back();
          }}
        />
        <p className={s.headerTitle}>일기 쓰기</p>
      </div>
      <div style={{ padding: "10px 20px" }}>
        <p className={s.todayText}>1월 17일, 오늘의 교환 일기</p>
        <div className={s.inputBox}>
          <p className={s.label}>제목</p>
          <input type="text" className={s.input} />
        </div>
        <div className={s.inputBox}>
          <p className={s.label}>내용</p>
          <textarea className={s.textarea} />
        </div>
        <button className={s.successButton}>완료</button>
      </div>
    </div>
  );
};

export default DiaryWritePage;
