import Image from "next/image";
import React from "react";

interface LessonCardProps {
  title: string;
  desc: string;
  src: string;
}

const LessonCard = ({ title, desc, src }: LessonCardProps) => {
  return (
    <div className="flex-1">
      <div className="relative h-[143px]">
        <Image
          src={src}
          alt="lesson_image"
          fill
          sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
        />
        <span className="absolute bottom-2 left-3 text-white text-lg">
          {title}
        </span>
      </div>
      <div className="p-3 bg-black text-white rounded-b-xl sm:text-xs lg:text-sm font-light whitespace-pre-wrap">
        {desc}
      </div>
    </div>
  );
};

export default LessonCard;
