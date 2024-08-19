import React from "react";
import FacilityCard from "./FacilityCard";

const FacilityInfo = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-20">
      <div className="flex relative">
        <h3 className="text-2xl font-medium tracking-wider">시설안내</h3>
        <div className="border-black border-b w-[100px] absolute bottom-2 left-[100px]" />
      </div>
      <div className="flex my-8 gap-4 md:gap-8">
        <FacilityCard src="/img/facility_1.png" />
        <FacilityCard src="/img/facility_2.png" />
        <FacilityCard src="/img/facility_3.png" />
        <FacilityCard src="/img/facility_3.png" />
      </div>
    </section>
  );
};

export default FacilityInfo;
