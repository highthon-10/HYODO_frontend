"use client";

import * as s from "./style.css";

import LeftArrow from "@/app/child/diary/write/LeftArrow";
import React from "react";
import { useRouter } from "next/navigation";

const ChildDiaryWritePage = () => {
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://211.112.175.88:8000/diary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          userId: 3,
        }),
      });

      if (response.ok) {
        router.push("/child");
      } else {
        alert("일기 작성 실패");
      }
    } catch (error) {
      console.error(error);
      alert("일기 작성 실패");
    }
  };

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
        <p className={s.todayText}>2월 16일, 오늘의 교환 일기</p>
        <div className={s.inputBox}>
          <p className={s.label}>제목</p>
          <input type="text" className={s.input} value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className={s.inputBox}>
          <p className={s.label}>내용</p>
          <textarea className={s.textarea} value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button className={s.successButton} onClick={handleSubmit}>
          완료
        </button>
      </div>
    </div>
  );
};

export default ChildDiaryWritePage;
