"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import { categorisData } from "./data/CategorisData";
import SectionTitle from "./SectionTitle";

const Categoris = () => {
  return (
    <div>
      <SectionTitle
        heading={""}
        subHeading={"Categories"}
        titleHeading={"Browse By Category"}
      />

      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {categorisData?.map((categori) => (
          <SwiperSlide key={categori.id} className="group">
            <div className="w-[170px] h-[145px] border border-[#0000004D] group-hover:border-none  group-hover:bg-[#DB4444] group-hover:text-white cursor-pointer  rounded flex items-center justify-center flex-col">
              <Image
                width={56}
                height={56}
                src={categori?.image}
                alt={"loading..?"}
                className="group-hover:brightness-0 group-hover:invert"
              />
              <h4 className="leading-6 mt-4">{categori?.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-b-[0.5px] my-[70px] border-black/opcaity-30"></div>
    </div>
  );
};

export default Categoris;
