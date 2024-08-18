import React from 'react';
import SectionTitle from './SectionTitle';
import { flashSalesData } from './data/FlashSalesData';
import Image from 'next/image';
import { EyeIcon, LoveTwoIcon } from '@/icons/Icons';

const SellingProducts = () => {
      return (
            <div className='relative'>
                  <SectionTitle heading={''} subHeading={"This Month"} titleHeading={'Best Selling Products'}/>
                  <button className='absolute top-14 right-0 w-[159px] h-14 leading-6 rounded bg-[#DB4444] text-white'>View All</button>

                <div className='grid grid-cols-4 gap-[30px]'>
                {flashSalesData?.map((itemTwo,edx)=>(
                        <div key={edx}>
              <div className="group relative">
              <div className="bg-[#F5F5F5] h-[250px] py-[35px] rounded">
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
                    src={itemTwo?.image}
                    width={190}
                    height={180}
                    alt="loading...?"
                    className={`cursor-pointer ${(itemTwo.id == 3 || itemTwo.id == 7) ? "mt-6 mr-5" : ""}`}
                  />
                </div>
              </div>
                <div className="w-full h-[41px] bg-black invisible group-hover:visible absolute bottom-0 rounded-b flex items-center justify-center">
                  <button className="text-white font-medium leading-6">
                    Add To Cart
                  </button>
                </div>
              </div>
              <h3 className="mt-4 leading-6 font-medium">{itemTwo?.name}</h3>
              <div className="flex items-center gap-x-3">
                <h3 className="text-[#DB4444] font-medium leading-6 my-2 text-base">
                  {itemTwo?.price}
                </h3>
                <h3 className="opacity-50 font-medium leading-6 my-2 text-base line-through">
                  {itemTwo?.discountPrice}
                </h3>
              </div>
            </div>
                  ))}
                </div>
            </div>
      );
};

export default SellingProducts;