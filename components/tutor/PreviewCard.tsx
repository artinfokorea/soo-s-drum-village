"use client";

import Link from "next/link";
import React from "react";
import FallbackImage from "../common/FallbackImage";

const PreviewCard = () => {
  return (
    <Link href="">
      <div className="relative aspect-[3/2]  ">
        <FallbackImage
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
