import BannerContainer from "@/components/common/BannerContainer";
import CounselingInfo from "@/components/inquiry/CounselingInfo";
import LessonReview from "@/components/inquiry/LessonReview";
import React from "react";

const page = () => {
  return (
    <main className="bg-white">
      <BannerContainer
        title="CONSULTATION"
        imgAlt="about banner"
        imgSrc="/img/inquiry_bg.png"
      />
      <CounselingInfo />
      <LessonReview />
    </main>
  );
};

export default page;
