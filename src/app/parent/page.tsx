"use client";

import * as s from "./style.css";

import React, { useEffect, useState } from "react";

import Pencil from "@/app/child/Pencil";
import WhiteArrow from "@/app/child/WhiteArrow";
import { useRouter } from "next/navigation";

const ParentHome = () => {
  const router = useRouter();
  const [pastDiaries, setPastDiaries] = useState<any[]>([]);

  useEffect(() => {
    const fetchPastDiaries = async () => {
      try {
        const response = await fetch("http://211.112.175.88:8000/diary/1");
        const data = await response.json();
        console.log(data);

        setPastDiaries(data);
      } catch (error) {
        console.error(error);
        setPastDiaries([]);
      }
    };

    fetchPastDiaries();
  }, []);

  return (
    <div className={s.container}>
      <p className={s.blackText} style={{ marginTop: 50 }}>
        안녕하세요! <span>김민솔</span>님!
        <br /> 오늘은 2025년 2월 16일 <span>일요일</span>이에요!
      </p>
      <div className={s.arrivedDiaryBox}>
        <p className={s.arrivedTitle}>도착한 일기</p>
        <p className={s.arrivedTextBlur}>
          오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기
          오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기오늘의일기
        </p>
        <p
          className={s.goToWrite}
          onClick={() => router.push("/parent/diary/write")}
        >
          오늘의 일기 작성하러 가기
          <Pencil />
          <WhiteArrow />
        </p>
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

export default ParentHome;
