import React from "react";
import PreviewCard from "./PreviewCard";
import InfoLabel from "../common/InfoLabel";

const VideoPreview = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <InfoLabel title="영상 소개" />
      <div className="my-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {Array.from({ length: 4 }).map((_, idx) => (
          <PreviewCard key={idx} />
        ))}
      </div>
    </section>
  );
};

export default VideoPreview;
