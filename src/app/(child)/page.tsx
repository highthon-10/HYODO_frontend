"use client";

import React, { useState } from "react";
import * as s from "./style.css";

const missions = [
  "주기적으로 안부 묻고 대화 나누기",
  "문자, 카톡, 손편지 등으로 마음 전하기",
  "필요하신 걸 챙겨드릴 수 있도록 지원하기",
  "직접 찍은 일상 사진 공유해 드리기",
];

const ChildHome = () => {
  const [checkedMissions, setCheckedMissions] = useState<boolean[]>(
    new Array(missions.length).fill(false)
  );

  const toggleCheck = (index: number) => {
    setCheckedMissions((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className={s.container}>
      <p className={s.blackText} style={{ marginTop: 50 }}>
        안녕하세요! <span>김민솔</span>님!
        <br /> 오늘은 2025년 2월 16일 <span>일요일</span>이에요!
      </p>
      <p className={s.blackText} style={{ marginTop: 20 }}>
        주간 미션 리스트
      </p>

      <div className={s.listBox}>
        {missions.map((mission, index) => (
          <div
            key={index}
            className={s.listContent}
            onClick={() => toggleCheck(index)}
          >
            <p className={s.listText}>{mission}</p>
            <div
              className={checkedMissions[index] ? s.checked : s.listCheck}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChildHome;
