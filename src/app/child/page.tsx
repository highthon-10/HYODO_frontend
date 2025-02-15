"use client";

import * as s from "./style.css";

import { Backpack, Dollar, Gift, Meal } from "@/app/child/Shape";
import React, { useState } from "react";

import Check from "@/app/child/Check";
import Image from "next/image";
import Pencil from "@/app/child/Pencil";
import RightArrow from "@/app/child/RightArrow";
import WhiteArrow from "@/app/child/WhiteArrow";

const missions = [
  "주기적으로 안부 묻고 대화 나누기",
  "문자, 카톡, 손편지 등으로 마음 전하기",
  "필요하신 걸 챙겨드릴 수 있도록 지원하기",
  "직접 찍은 일상 사진 공유해 드리기",
];

const ChildHome = () => {
  const [checkedMissions, setCheckedMissions] = useState<boolean[]>(new Array(missions.length).fill(false));

  const toggleCheck = (index: number) => {
    setCheckedMissions((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

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
        <p className={s.goToWrite}>
          오늘의 일기 작성하러 가기
          <Pencil />
          <WhiteArrow />
        </p>
      </div>
      <div className={s.watchingHistory}>
        지난 일기 기록 보기
        <button className={s.pencilButton}>
          <RightArrow />
        </button>
      </div>
      <p className={s.blackText} style={{ marginTop: 30 }}>
        주간 미션 리스트
      </p>
      <div className={s.listBox}>
        {missions.map((mission, index) => (
          <div key={index} className={s.listContent} onClick={() => toggleCheck(index)}>
            <p className={s.listText}>{mission}</p>
            <div className={s.listCheck}>
              {checkedMissions[index] ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Check />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <p className={s.blackText} style={{ marginTop: 30 }}>
        히든 미션 리스트
      </p>
      <div className={s.hiddenList}>
        <div className={s.hiddenMission}>
          <Image src={Gift} alt="선물" />
          소소한 선물 챙겨드리기
        </div>
        <div className={s.hiddenMission}>
          <Image src={Backpack} alt="여행" />
          함께 여행떠나기 보내드리기
        </div>
        <div className={s.hiddenMission}>
          <Image src={Dollar} alt="용돈" />
          용돈드리기
        </div>
        <div className={s.hiddenMission}>
          <Image src={Meal} alt="외식" />
          달에 한 번 밥 먹기
        </div>
      </div>
    </div>
  );
};

export default ChildHome;
