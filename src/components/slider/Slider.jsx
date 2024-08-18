"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Apple from "/public/images/apple.png";
import Phone from "/public/images/phone.png";
import { RightArrowIcon } from "@/icons/Icons";


const slidesData = [
  {
  
    textColor: '#FAFAFA',
    imageSrc: '/images/apple.png',
    productTitle: 'iPhone 14 Series',
    mainTitle: 'Up to 10% off Voucher',
    buttonText: 'Shop Now',
    icon: <RightArrowIcon />,
    mainImageSrc: '/images/phone.png',
  },
  {
  
    textColor: '#FAFAFA',
    imageSrc: '/images/apple.png',
    productTitle: 'iPhone 14 Series',
    mainTitle: 'Up to 10% off Voucher',
    buttonText: 'Shop Now',
    icon: <RightArrowIcon />,
    mainImageSrc: '/images/phone.png',
  },
  {
  
    textColor: '#FAFAFA',
    imageSrc: '/images/apple.png',
    productTitle: 'iPhone 14 Series',
    mainTitle: 'Up to 10% off Voucher',
    buttonText: 'Shop Now',
    icon: <RightArrowIcon />,
    mainImageSrc: '/images/phone.png',
  },

];

const Slider = () => {
  return (
    <div className="w-[892px] ml-[45px]  mt-10 ">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
  <Swiper>
      {slidesData.map((slide, idx) => (
        <SwiperSlide
          key={idx}
          style={{ color: slide.textColor }}
          className={`bg-black w-full  pl-16`}
        >
          <div className={`h-[344px] flex items-center `}>
            <div>
              <div className="flex items-center gap-6">
                <Image src={slide.imageSrc} height={49} width={40}  alt={`${slide.productTitle} image`}  />
                <p>{slide.productTitle}</p>
              </div>
              <h1 className="text-5xl font-semibold mt-5 leading-[60px]">
                {slide.mainTitle}
              </h1>
              <button className="flex items-center gap-2 font-medium mt-[22px] group">
                <span className="border-b leading-6">{slide.buttonText}</span>
                <span className="group-hover:translate-x-2 translate-x-0 duration-200">
                  {slide.icon}
                </span>
              </button>
            </div>
            <Image src={slide.mainImageSrc} width={496} height={344} alt={`${slide.productTitle} main image`} />
          </div>
        </SwiperSlide>
        
      ))}
    
    </Swiper>
      </Swiper>
    </div>
  );
};

export default Slider;
