"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <header className="sticky left-0 top-0 z-50 bg-white">
      <div className=" max-w-screen-lg mx-auto flex justify-between">
        <Image
          src="/logo_with_title.png"
          alt="Soo Logo"
          width={271}
          height={89}
        />
        <div className="flex items-center gap-8">
          <MenuItem href="/about" label="소개" />
          <MenuItem href="/services" label="상담게시판" />
          <MenuItem href="/location" label="오시는길" />
        </div>
      </div>
    </header>
  );
};

export default Header;
