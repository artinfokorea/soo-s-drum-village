import BannerContainer from "@/components/common/BannerContainer";
import React from "react";

const page = () => {
  return (
    <main className="bg-white">
      <BannerContainer
        title="MAP"
        imgAlt="about banner"
        imgSrc="/img/direction_bg.png"
      />
    </main>
  );
};

export default page;
