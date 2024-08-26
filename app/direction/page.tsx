import BannerContainer from "@/components/common/BannerContainer";
import Map from "@/components/direction/Map";
import React from "react";

const page = () => {
  return (
    <main className="bg-white">
      <BannerContainer
        title="MAP"
        imgAlt="about banner"
        imgSrc="/img/direction_bg.png"
      />
      <Map />
    </main>
  );
};

export default page;
