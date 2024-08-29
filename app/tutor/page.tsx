import TutorInfo from "@/components/tutor/TutorInfo";
import VideoPreview from "@/components/tutor/VideoPreview";
import BannerContainer from "@/components/common/BannerContainer";
import React from "react";

const page = () => {
  return (
    <main className="bg-white pt-[20px]">
      <BannerContainer
        title="INTRODUCE"
        imgAlt="about banner"
        imgSrc="/img/about_bg.png"
      />
      <TutorInfo />
      <VideoPreview />
    </main>
  );
};

export default page;
