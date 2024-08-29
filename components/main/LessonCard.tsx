import Image from "next/image";
import React from "react";

interface LessonCardProps {
  title: string;
  desc: string;
  src: string;
}

const LessonCard = ({ title, desc, src }: LessonCardProps) => {
  return (
    <div className="w-40 sm:flex-1 flex-shrink-0">
      <div className="relative h-[130px] md:h-[143px]">
        <Image
          src={src}
          alt="lesson_image"
          fill
          sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
          className="rounded-t-xl"
        />
        {/* <span className="absolute bottom-10 md:bottom-2 left-3 text-white text-xl">
          {title}
        </span>
        <div className="md:hidden absolute top-24 left-0 text-white  px-3 break-keep text-sm font-light">
          {desc}
        </div> */}
      </div>
      {/* <div className="bg-black h-[70px] rounded-b-xl md:hidden" /> */}
      <div className="min-h-[105px] md:block p-3 bg-black text-white rounded-b-xl text-sm font-light">
        <p className="whitespace-pre-wrap">{desc}</p>
      </div>
    </div>
  );
};

export default LessonCard;
