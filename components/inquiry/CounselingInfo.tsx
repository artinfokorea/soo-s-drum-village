import React from "react";
import InfoLabel from "../common/InfoLabel";

const CounselingInfo = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <InfoLabel title="상담 안내" />
      <div className="mt-16 px-8 flex flex-col gap-12">
        <div className="flex items-center gap-4 md:gap-8 text-base md:text-lg">
          <p className="px-6 py-2 border-lightgray border rounded-full font-bold ">
            전화
          </p>
          <a href={`tel:010 - 4020 - 7451`} className="flex gap-4 items-center">
            <img src="/icons/phone_black.png" alt="phone_icon" />
            <span className="tracking-wider text-lg">010-4020-7451</span>
          </a>
        </div>
        <div className="flex items-center gap-8 md:text-lg">
          <p className="px-6 py-2 border-lightgray border rounded-full font-bold ">
            실시간 상담
          </p>
          <button className="flex gap-4 text-lg items-center">
            <img src="/icons/link_black.png" alt="link_icon" />
            <span className="tracking-wider text-lg">상담 바로가기</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CounselingInfo;
