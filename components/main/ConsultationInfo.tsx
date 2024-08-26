"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConsultationInfo = () => {
  return (
    <section className=" bg-whitesmoke h-[230px] md:h-[425px] py-8 md:py-[72px]">
      <div className="max-w-screen-md mx-auto flex md:justify-between items-center">
        <div className="flex flex-1 flex-col gap-4 md:gap-8 px-8">
          <h2 className="text-2xl md:text-4xl font-semibold">
            드럼에 관한 모든것
          </h2>
          <h4 className="text-base md:text-lg leading-relaxed">
            재미와 실력을 동시에 잡을수 있는 <br /> 수 드럼전문학원
          </h4>
          <div className="flex justify-end md:justify-start">
            <Link
              href="/inquiry"
              className="bg-black text-white text-base md:text-lg font-semibold py-[10px] px-7 rounded-full"
            >
              무료 상담받기
            </Link>
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
