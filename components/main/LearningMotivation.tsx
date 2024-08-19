"use client";

import React from "react";
import Image from "next/image";

const MotivationTag = ({ label }: { label: string }) => {
  return (
    <div className="bg-whitesmoke rounded-full py-3 px-8">
      <span className="text-lg font-bold">{label}</span>
    </div>
  );
};

const LearningMotivation = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-20">
      <div className="relative aspect-[3/1] h-[185px] mx-auto mb-20">
        <Image src="/logo_with_title.png" alt="soo_logo" fill />
      </div>
      <div className="flex gap-4 justify-center my-8">
        <MotivationTag label={`"드럼은 어려워"`} />
        <MotivationTag label={`"드럼은 손과 발이 따로 움직여야해"`} />
        <MotivationTag label={`"난 음악을 해본 적이 없어"`} />
        <MotivationTag label={`"난 타고난 박치야"`} />
      </div>
      <p className="text-center text-lg leading-relaxed">
        드럼을 시작할 수 없는 수많은 이유들을 듣고 고충을 해결해줘야 했습니다.
        하지만 제가 시작하고 재미를 붙여서 <br /> 연주해왔던 드럼은 어렵기만
        하고 특별히 선택 받는 사람만이 다룰 수 있는 악기가 아니었습니다. <br />
        누구나 쉽고 빠르게 배우며, 재미를 느낄 수 있는 악기가 ‘드럼’입니다.
        <br />
        배우고 싶은 마음은 있지만, 선뜻 도전할 수 없었던 당신을 위해 ‘수
        드럼전문학원’이 도와드리겠습니다.
      </p>
    </section>
  );
};

export default LearningMotivation;
