import { Dialog, DialogPanel } from "@headlessui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import { Facility } from "@/types";
import { facilityList } from "../main/FacilityInfo";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import FallbackImage from "../common/FallbackImage";

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
                <FallbackImage
                  src={facility.src}
                  alt="facility image"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="rounded px-4 sm:px-12"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex w-full max-w-5xl mx-auto justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
            <button className="transform  rounded-full " onClick={handlePrev}>
              <ChevronLeftIcon className="text-white h-8 md:h-12" />
            </button>
            <button
              className="transform rounded-full transition-colors"
              onClick={handleNext}
            >
              <ChevronRightIcon className="text-white h-8 md:h-12" />
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default FacilityDialog;
