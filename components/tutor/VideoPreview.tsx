import React from "react";
import PreviewCard from "./PreviewCard";

const VideoPreview = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-bold tracking-wider">영상 소개</h3>
        <div className="border-lightgray border w-40 md:w-72" />
      </div>
      <div className="my-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {Array.from({ length: 4 }).map((_, idx) => (
          <PreviewCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default VideoPreview;
