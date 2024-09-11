"use client";

import Link from "next/link";
import React from "react";

interface PreviewCardProps {
  href: string;
  src: string;
}

const PreviewCard = ({ href, src }: PreviewCardProps) => {
  return (
    <Link href={href} target="__blank">
      <div className="relative aspect-[3/2]  ">
        <img
          src={src}
          alt="lesson_preview_img"
          className="w-full h-full object-cover rounded"
          sizes="(max-width: 768px) 240px 300px, 400px 500px"
        />
      </div>
    </Link>
  );
};

export default PreviewCard;
