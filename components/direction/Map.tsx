import React from "react";
import InfoLabel from "../common/InfoLabel";
import DescriptionLabel from "../common/DescriptionLabel";
import KakaoMap from "../common/KakaoMap";

const Map = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
      <InfoLabel title="찾아오시는 길" />
      <div className="mt-16 px-8 flex flex-col gap-12">
        <div className="flex items-center gap-4 md:gap-8 text-base md:text-lg">
          <DescriptionLabel title="주소" />
          <p className="tracking-wider text-lg">
            경기 군포시 산본로 323번길 16-31 한솔프라자 5층
          </p>
        </div>
        <div className="aspect-[2/1]">
          <KakaoMap />
        </div>
      </div>
    </section>
  );
};

export default Map;
