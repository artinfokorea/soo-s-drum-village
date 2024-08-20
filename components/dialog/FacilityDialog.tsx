import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import { Facility } from "@/types";
import { facilityList } from "../main/FacilityInfo";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";

interface FacilityDialogProps {
  seletedFacility: Facility;
  close: () => void;
}

const FacilityDialog = ({ seletedFacility, close }: FacilityDialogProps) => {
  const [swiper, setSwiper] = useState<SwiperClass>(); // -> 슬라이드용

  const initialSlide = facilityList?.findIndex(
    (facility) => facility.id === seletedFacility.id
  );

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <Dialog open={!!seletedFacility} onClose={close} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-5xl">
          <Swiper
            spaceBetween={10}
            modules={[Pagination, Navigation]}
            initialSlide={initialSlide}
            navigation
            onSwiper={(e) => {
              setSwiper(e);
            }}
            loop
          >
            {facilityList?.map((facility) => (
              <SwiperSlide
                key={facility.id}
                className="max-h-[750px] aspect-[3/2]"
              >
                <Image
                  src={facility.src}
                  alt="facility image"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="rounded px-8"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="absolute left-[-8px] md:left-32 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
            onClick={handlePrev}
          >
            <ChevronLeftIcon className="text-white h-12 md:h-20" />
          </button>
          <button
            className="absolute right-[-8px] md:right-32 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full"
            onClick={handleNext}
          >
            <ChevronRightIcon className="text-white h-12 md:h-20" />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FacilityDialog;
