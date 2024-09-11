import React from "react";
import PreviewCard from "./PreviewCard";
import InfoLabel from "../common/InfoLabel";

const VideoPreview = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <InfoLabel title="영상 소개" />
      <div className="my-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <PreviewCard
          href="https://www.youtube.com/watch?v=3l1kLZ46jWg&t=163s"
          src="https://img.youtube.com/vi/3l1kLZ46jWg/0.jpg"
        />

        <PreviewCard
          href="https://www.youtube.com/watch?v=pzUYmZEn-nw&t=209s"
          src="https://img.youtube.com/vi/pzUYmZEn-nw/0.jpg"
        />
        <PreviewCard
          href="https://www.youtube.com/watch?v=L8EQaJxkEd4"
          src="https://img.youtube.com/vi/L8EQaJxkEd4/0.jpg"
        />
        <PreviewCard
          href="https://www.youtube.com/watch?v=tzxE86cZyeA"
          src="https://img.youtube.com/vi/tzxE86cZyeA/0.jpg"
        />
      </div>
    </section>
  );
};

export default VideoPreview;
