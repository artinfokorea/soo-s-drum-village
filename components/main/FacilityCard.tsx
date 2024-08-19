import Image from "next/image";
import React from "react";

interface FacilityCardProps {
  src: string;
}

const FacilityCard = ({ src }: FacilityCardProps) => {
  return (
    <div className="flex-1 aspect-[3/2] relative">
      <Image
        src={src}
        alt="facility_image"
        fill
        sizes="(max-width: 768px) 100px 180px, (max-width: 1200px) 200px, 200px"
      />
    </div>
  );
};

export default FacilityCard;
