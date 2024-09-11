"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MobileDropDown from "./MobileDropDown";

interface MenuItemProps {
  href: string;
  label: string;
}

const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <Link href={href} className="text-black font-semibold text-lg">
      {label}
    </Link>
  );
};

const Header = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-50 h-[62px] md:h-[90px] py-2 bg-white md:py-0 ">
      <div className="max-w-screen-lg mx-auto flex justify-between px-4 items-center">
        <Link href="/">
          <div className="relative aspect-[3/1] h-[46px] md:h-[90px]">
            <Image
              src="/logo_header.png"
              alt="Soo Logo"
              fill
              sizes="(max-width: 768px) 220px 60px, 271px, 89px"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <MenuItem href="/tutor" label="소개" />
          <MenuItem href="/inquiry" label="상담게시판" />
          <MenuItem href="/direction" label="오시는길" />
        </nav>
        <MobileDropDown
          isBarOpen={isBarOpen}
          handleBar={() => setIsBarOpen(!isBarOpen)}
        />
      </div>
    </header>
  );
};

export default Header;
