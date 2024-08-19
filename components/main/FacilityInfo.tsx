"use client";

import React, { useState } from "react";
import FacilityCard from "./FacilityCard";
import FacilityDialog from "../dialog/FacilityDialog";
import { Facility } from "@/types";

export const facilityList = [
  { id: 1, src: "/img/facility_1.png" },
  { id: 2, src: "/img/facility_2.png" },
  { id: 3, src: "/img/facility_3.png" },
  { id: 4, src: "/img/facility_3.png" },
];

const FacilityInfo = () => {
  const [seletedFacility, setSelectedFacility] = useState<Facility | null>();

  const seleteFacility = (facility: Facility) => setSelectedFacility(facility);

  return (
    <>
      <section className="max-w-screen-lg mx-auto py-6 md:py-20 px-4">
        <div className="flex relative">
          <h3 className="text-2xl font-bold tracking-wider">시설안내</h3>
          <div className="border-black border-b w-16 md:w-[100px] absolute bottom-2 left-[100px]" />
        </div>
        <div className="flex my-8 gap-8 overflow-x-auto scrollbar-hide">
          {facilityList.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              seleteFacility={seleteFacility}
            />
          ))}
        </div>
      </section>
      {seletedFacility && (
        <FacilityDialog
          seletedFacility={seletedFacility}
          close={() => setSelectedFacility(null)}
        />
      )}
    </>
  );
};

export default FacilityInfo;
