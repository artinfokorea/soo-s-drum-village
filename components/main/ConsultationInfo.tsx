"use client";

import Image from "next/image";
import React from "react";

const ConsultationInfo = () => {
  return (
    <section className=" bg-whitesmoke h-[425px] py-[72px]">
      <div className="max-w-screen-md mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">드럼에 관한 모든것</h2>
          <h4 className="text-lg leading-relaxed">
            재미와 실력을 동시에 잡을수 있는 <br /> 수 드럼전문학원
          </h4>
          <div>
            <button className="bg-black text-white text-lg font-semibold py-[10px] px-7 rounded-full">
              무료 상담받기
            </button>
          </div>
        </div>
        <Image
          src="/logo.png"
          alt="soo_logo"
          width={281}
          height={281}
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default ConsultationInfo;
