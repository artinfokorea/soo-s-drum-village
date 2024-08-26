import React from "react";
import InfoLabel from "../common/InfoLabel";
import ReviewCard from "./ReviewCard";

const LessonReview = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <InfoLabel title="수업 후기" />
      <div className="my-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {Array.from({ length: 6 }).map((_, idx) => (
          <ReviewCard
            key={idx}
            name="임성준 학생"
            category="드럼입시"
            content="전문적인 선생님이 열정적으로 알려주시고 가르쳐주셔서 입시를 준비하는데 많은 도움이 되었고 짧은 기간임에도 눈에 보일 만큼 큰 변화가 생기고 좋아져서 굉장히 만족합니다."
          />
        ))}
      </div>
    </section>
  );
};

export default LessonReview;
