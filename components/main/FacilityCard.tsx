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
      className="w-44 flex-shrink-0 sm:flex-1 aspect-[3/2] relative focus:outline-none"
      onClick={() => seleteFacility(facility)}
    >
      <FallbackImage
        src={facility.src}
        alt="facility_image"
        fill
        sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
      />
    </button>
  );
};

export default FacilityCard;
