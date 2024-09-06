import React from "react";
import { abhayaLibre } from "@/utils/font";
import FallbackImage from "./FallbackImage";

interface BannerContainerProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const BannerContainer = ({ imgSrc, imgAlt, title }: BannerContainerProps) => {
  return (
    <section className="w-full relative">
      <div className="relative w-full aspect-[3/1] md:h-[400px] ">
        <FallbackImage src={imgSrc} alt={imgAlt} fill />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className={`text-white text-3xl md:text-7xl  ${abhayaLibre.className}`}
        >
          {title}
        </h2>
      </div>
    </section>
  );
};

export default BannerContainer;
