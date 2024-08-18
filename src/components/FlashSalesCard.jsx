"use client";
import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { flashSalesData } from "./data/FlashSalesData";
import { LoveTwoIcon, EyeIcon, LeftArrowIcon, RightArrowTwoIcon } from "@/icons/Icons";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

const FlashSalesCard = () => {
  const swiperRef = useRef(null);

  return (
   <div>
     <div className="relative mt-[140px]">
      <SectionTitle heading={""} subHeading={"Today’s"}></SectionTitle>
      <div className="flex -mt-9 gap-x-[87px]">
        <h1 className="text-[36px] leading-[48px] font-semibold ">
          Flash Sales
        </h1>
        <CountdownTimer/>
      </div>

     
      <div className="absolute inset-0 top-[57px] z-40">
        <div className="absolute right-14">
          <button className="
          bg-[#F5F5F5] size-[46px] rounded-full flex items-center justify-center " onClick={() => swiperRef.current?.swiper.slidePrev()}>
            <LeftArrowIcon />
          </button>
        </div>
        <div className="absolute right-0">
          <button className="
          bg-[#F5F5F5] size-[46px] rounded-full flex items-center justify-center" onClick={() => swiperRef.current?.swiper.slideNext()}>
            <RightArrowTwoIcon />
          </button>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
     
      >
        {flashSalesData?.map((item) => (
          <SwiperSlide key={item?.id} className="mt-10">
            <div>
              <div className="group relative">
              <div className="bg-[#F5F5F5] h-[250px] py-[35px] rounded">
                <div className="absolute top-3 left-3">
                 
                    <div className="bg-[#DB4444] text-white w-[55px] h-[26px] rounded text-xs leading-[18px] flex items-center justify-center">
                      <span>{item?.discount }</span>
                    </div>
                  
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex flex-col items-center gap-y-2">
                    <div className="size-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer x">
                      <LoveTwoIcon />
                    </div>
                    <div className="size-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer ">
                      <EyeIcon />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center  ">
                  <Image
                    src={item?.image}
                    width={190}
                    height={180}
                    alt="loading...?"
                    className={`cursor-pointer ${(item.id == 3 || item.id == 7) ? "mt-6 mr-5" : ""}`}
                  />
                </div>
              </div>
                <div className="w-full h-[41px] bg-black invisible group-hover:visible absolute bottom-0 rounded-b flex items-center justify-center">
                  <button className="text-white font-medium leading-6">
                    Add To Cart
                  </button>
                </div>
              </div>
              <h3 className="mt-4 leading-6 font-medium">{item?.name}</h3>
              <div className="flex items-center gap-x-3">
                <h3 className="text-[#DB4444] font-medium leading-6 my-2 text-base">
                  {item?.price}
                </h3>
                <h3 className="opacity-50 font-medium leading-6 my-2 text-base line-through">
                  {item?.discountPrice}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="mt-[60px] flex justify-center">
    <button className="bg-[#DB4444] h-14 w-[236px] rounded text-white font-medium leading-6 ">View All Products</button>
    </div>

    <div className="border-b-[0.5px] my-[70px] border-black/opcaity-30">

    </div>
   </div>
  );
};

export default FlashSalesCard;
