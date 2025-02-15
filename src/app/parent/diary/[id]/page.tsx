"use client";

import * as s from "./style.css";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const DiaryDetailPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [diary, setDiary] = useState<any>(null);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await fetch(`http://211.112.175.88:8000/diary/${id}`);
        const data = await response.json();
        console.log(data);
        setDiary(data[0]);
      } catch (error) {
        console.error(error);
        setDiary(null);
      }
    };

    if (id) {
      fetchDiary();
    }
  }, [id]);

  if (!diary) {
    return <p>로딩</p>;
  }

  return (
    <div className={s.container}>
      <button onClick={() => router.back()}>←</button>
      <h1 className={s.title}>{diary.title}</h1>
      <p className={s.date}>{diary.createdAt ? diary.createdAt.substring(0, 10) : "데이터가 없어요"}</p>
      <div className={s.content}>{diary.content}</div>
    </div>
  );
};

export default DiaryDetailPage;
