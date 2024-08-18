"use client";

import { LeftArrowIcon, RightArrowTwoIcon } from "@/icons/Icons";
import { useSwiper } from "swiper/react";
export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className="absolute inset-0 top-0  z-40   ">
        <div className=" absolute right-10   ">
          <button className=" " onClick={() => swiper.slidePrev()}><LeftArrowIcon/></button>
        </div>
        <div className=" absolute right-0  ">
          <button className="" onClick={() => swiper.slideNext()}><RightArrowTwoIcon/></button>
        </div>
      </div>
    </>
  );
};
