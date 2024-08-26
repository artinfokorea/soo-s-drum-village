import TutorInfo from "@/components/about/TutorInfo";
import BannerContainer from "@/components/common/BannerContainer";
import React from "react";

const page = () => {
  return (
    <main className="bg-white">
      <BannerContainer
        title="INTRODUCE"
        imgAlt="about banner"
        imgSrc="/img/about_bg.png"
      />
      <TutorInfo />
    </main>
  );
};

export default page;
