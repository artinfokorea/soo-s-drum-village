import React from "react";
import LessonCard from "./LessonCard";

const LessonInfo = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-20">
      <div className="flex relative">
        <h3 className="text-2xl font-medium tracking-wider">수업안내</h3>
        <div className="border-black border-b w-[100px] absolute bottom-2 left-[100px]" />
      </div>
      <div className="flex my-8 gap-12">
        <LessonCard
          title="취미 레슨"
          src="/img/lesson_hobby.png"
          desc={`음표읽기부터 노래에 맞춰 연주하기까지\n드럼에 관련된 모든 것을 알려드립니다`}
        />
        <LessonCard
          title="입시 레슨"
          src="/img/lesson_college.png"
          desc={`20년 이상의 입시 노하우를 가진 최고 합격율을 가진\n수 드럼전문학원만의 시스템`}
        />
        <LessonCard
          title="전문가 레슨"
          src="/img/lesson_expert.png"
          desc={`각 학교별 선호하는 연주스타일에\n최적화된 레슨을 제공합니다`}
        />
      </div>
    </section>
  );
};

export default LessonInfo;
