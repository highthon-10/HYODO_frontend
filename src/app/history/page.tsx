"use client";

import React, { useEffect, useState } from "react";
import * as s from "./style.css";
import LeftArrow from "@/app/child/diary/write/LeftArrow";
import { useRouter } from "next/navigation";

const HistoryPage = () => {
  const router = useRouter();
  const [selectedName, setSelectedName] = useState("인프런");
  const [pastDiaries, setPastDiaries] = useState<any[]>([]);

  useEffect(() => {
    const fetchPastDiaries = async () => {
      try {
        const userId = selectedName === "인프런" ? 1 : 3;
        const response = await fetch(
          `http://211.112.175.88:8000/diary/${userId}`
        );
        const data = await response.json();

        setPastDiaries(data);
      } catch (error) {
        console.error("⚠️ API 요청 실패:", error);
        setPastDiaries([]);
      }
    };

    fetchPastDiaries();
  }, [selectedName]);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <LeftArrow onClick={() => router.back()} />
        <p className={s.headerTitle}>지난 일기 보기</p>
      </div>
      <div className={s.names}>
        <span
          className={
            selectedName === "인프런" ? s.selectedName : s.unselectedName
          }
          onClick={() => setSelectedName("인프런")}
        >
          인프런
        </span>{" "}
        |{" "}
        <span
          className={
            selectedName === "김민솔" ? s.selectedName : s.unselectedName
          }
          onClick={() => setSelectedName("김민솔")}
        >
          김민솔
        </span>
      </div>
      <div className={s.pastDiariesContainer}>
        {pastDiaries.map((diary, index) => {
          return (
            <div key={index} className={s.diaryItem}>
              <p className={s.diaryDate}>
                {diary.title}{" "}
                <span style={{ color: "grey" }}>
                  {diary.createdAt.substring(0, 10)}
                </span>
              </p>
              <p className={s.diaryPreview}>{diary.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryPage;
