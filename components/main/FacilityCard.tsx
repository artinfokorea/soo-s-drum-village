import Image from "next/image";
import React from "react";

interface FacilityCardProps {
  src: string;
}

const FacilityCard = ({ src }: FacilityCardProps) => {
  return (
    <button className="w-40 flex-shrink-0 sm:flex-1 aspect-[3/2] relative">
      <Image
        src={src}
        alt="facility_image"
        fill
        sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
      />
    </button>
  );
};

export default FacilityCard;
