import { Facility } from "@/types";
import React from "react";
import FallbackImage from "../common/FallbackImage";

interface FacilityCardProps {
  facility: { id: number; src: string };
  seleteFacility: (facility: Facility) => void;
}

const FacilityCard = ({ facility, seleteFacility }: FacilityCardProps) => {
  return (
    <button
      className="w-44 md:w-64 lg:w-60 flex-shrink-0 aspect-[3/2] focus:outline-none relative"
      onClick={() => seleteFacility(facility)}
    >
      <FallbackImage
        src={facility.src}
        alt="facility_image"
        fill
        sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
        className="rounded"
      />
    </button>
  );
};

export default FacilityCard;
