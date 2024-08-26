"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const PreviewCard = () => {
  return (
    <Link href="">
      <div className="relative aspect-[3/2]  ">
        <Image
          src="/img/preview_1.png"
          alt="lesson_preview_img"
          fill
          sizes="(max-width: 768px) 240px 300px, 400px 500px"
        />
      </div>
    </Link>
  );
};

export default PreviewCard;
