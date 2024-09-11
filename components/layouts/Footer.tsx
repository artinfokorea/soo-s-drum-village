"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-whitesmoke border-t-2 md:py-[60px] py-8 px-4 whitespace-nowrap">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row  md:gap-24 md:items-center">
        <div className="relative  h-[46px] md:h-[90px] md:ml-12 mb-8 md:mb-0 w-[140px] md:w-[270px]">
          <Image
            src="/logo_with_title.png"
            alt="Soo Logo"
            fill
            sizes="(max-width: 768px) 220px 60px, 271px, 89px"
            priority
          />
        </div>
        <div className="font-medium flex flex-col gap-2">
          <div className="flex gap-2 flex-col md:flex-row">
            <div>
              <span className="font-bold md:font-medium">상호</span>
              <span>: 수 드럼학원</span>
            </div>
            <span className="hidden md:inline">|</span>
            <div>
              <span className="font-bold md:font-medium">대표</span>
              <span>: 최성수</span>
            </div>
            <span className="hidden md:inline">|</span>
            <div>
              <span className="font-bold md:font-medium">전화</span>
              <span>: 010-8797-4509</span>
            </div>

            <span className="hidden md:inline">|</span>
            <div>
              <span className="font-bold md:font-medium">이메일</span>
              <span>: 4504509@naver.com</span>
            </div>
          </div>
          <div className="tracking-wider flex flex-col md:flex-row gap-2">
            <span className="font-bold md:font-medium">주소</span>
            <span className="hidden md:inline">:</span>
            <span> 경기 군포시 산본로 323번길 16-31 </span>
            <span>한솔프라자 502호</span>
          </div>
          <div className="flex gap-2 flex-col md:flex-row tracking-wider">
            <div>
              <span className="font-bold md:font-medium">사업자등록번호</span>
              <span>: 655-97-01599</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
