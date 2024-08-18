"use client";
import { LoveIcon, SearchIcon, ShopIcon } from "@/icons/Icons";
import { navberData } from "./data/NavberData";
import { useEffect, useState } from "react";

const Navber = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const scrollHeader = () => {
      if (window.scrollY >= 30) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <div>
      <div
        className={` flex items-center gap-[148px] trans duration-500  ${
          sticky
            ? " fixed top-0 w-full px-[19%]   bg-[#DB4444] z-50 py-2.5 text-white "
            : "mt-10 w-[1170px] mx-auto  "
        }`}
      >
        <div className="flex items-center gap-x-[190px]">
          <h1 className="text-2xl font-bold leading-6">Exclusive</h1>
          <ul className="flex items-center gap-12 leading-6">
            {navberData?.map((menu, e) => (
              <li key={e} className="cursor-pointer">
                {menu?.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className={`bg-[#F5F5F5] h-[38px] w-[243px] pl-5 pr-10 outline-none rounded text-xs leading-[18px] ${
                sticky ? "placeholder:text-black text-black" : ""
              } `}
            />
            <div className="absolute top-[7px] right-3 cursor-pointer">
              <SearchIcon />
            </div>
          </div>
          <button className={`ml-6 mr-4  ${sticky ? "icon" : ""}`}>
            <LoveIcon />
          </button>
          <button className={`  ${sticky ? "icon" : ""}`}>
            <ShopIcon />
          </button>
        </div>
      </div>
      j<div className="border-b mt-4"></div>
    </div>
  );
};

export default Navber;
