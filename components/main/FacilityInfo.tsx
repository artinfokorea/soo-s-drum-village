"use client";

import React, { useState } from "react";
import FacilityCard from "./FacilityCard";
import FacilityDialog from "../dialog/FacilityDialog";
import { Facility } from "@/types";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

export const facilityList = [
  { id: 1, src: "/img/facility_1.jpeg" },
  { id: 2, src: "/img/facility_2.jpeg" },
  { id: 3, src: "/img/facility_3.jpeg" },
  { id: 4, src: "/img/facility_4.jpeg" },
  { id: 5, src: "/img/facility_5.jpeg" },
  { id: 6, src: "/img/facility_6.jpeg" },
  { id: 7, src: "/img/facility_7.jpeg" },
  { id: 8, src: "/img/facility_8.jpeg" },
  { id: 9, src: "/img/facility_9.jpeg" },
];

const FacilityInfo = () => {
  const [seletedFacility, setSelectedFacility] = useState<Facility | null>();
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };

  const seleteFacility = (facility: Facility) => setSelectedFacility(facility);

  const handleSlideChange = (swiperInstance: SwiperClass) => {
    setIsBeginning(swiperInstance.isBeginning);
    setIsEnd(swiperInstance.isEnd);
  };

  return (
    <>
      <section className="max-w-screen-lg mx-auto py-6 md:pt-[80px] md:pb-20 px-4">
        <div className="flex justify-between">
          <div className="flex relative">
            <h3 className="text-2xl font-bold tracking-wider">시설안내</h3>
            <div className="border-black border-b w-16 md:w-[100px] absolute bottom-2 left-[100px]" />
          </div>
          <div className="hidden md:flex justify-end border border-grey rounded-lg">
            <button
              className="transform px-1 border-grey border-r-[1px]"
              aria-label="prev_button"
              disabled={isBeginning}
              onClick={handlePrev}
            >
              <ChevronLeftIcon
                className={`h-5 ${!isBeginning ? "text-black" : "text-silver"}`}
              />
            </button>
            <button
              className="transform px-1"
              aria-label="next_button"
              disabled={isEnd}
              onClick={handleNext}
            >
              <ChevronRightIcon
                className={`h-5 ${isEnd ? "text-silver" : "text-black"}`}
              />
            </button>
          </div>
        </div>

        <div className="my-8 hidden md:flex overflow-x-scroll">
          <Swiper
            spaceBetween={5}
            modules={[Pagination, Navigation]}
            onSlideChange={(swiperInstance) =>
              handleSlideChange(swiperInstance)
            }
            scrollbar={{ draggable: true }}
            navigation
            onSwiper={(e) => {
              setSwiper(e);
            }}
            slidesPerView={3}
            breakpoints={{
              1024: {
                slidesPerView: 4,
              },
            }}
            grabCursor={true}
            touchMoveStopPropagation={true}
          >
            {facilityList.map((facility) => (
              <SwiperSlide
                key={facility.id}
                className="max-h-[750px] aspect-[3/2]"
              >
                <FacilityCard
                  key={facility.id}
                  facility={facility}
                  seleteFacility={seleteFacility}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="my-8 flex gap-6 md:hidden overflow-x-scroll scrollbar-hide">
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
