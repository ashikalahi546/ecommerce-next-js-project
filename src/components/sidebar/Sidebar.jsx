"use client";
import { sidebarData } from "@/components/data/SidebarData";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Slider from "../slider/Slider";

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex ">
      <div className="mt-10">
        <ul className="leading-6 relative w-[217px]  ">
          {sidebarData?.map((menu, index) => (
            <li key={menu.id} className="mb-4">
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center justify-between cursor-pointer group     "
              >
                <div
                  className={`transition-colors duration-300 ${
                    hovered === index ? "text-orange-500" : ""
                  }`}
                >
                  {menu?.title}
                </div>
                <div
                  className={`transition-transform duration-300 ease-in-out group-hover:text-orange-500   ${
                    hovered === index ? "group-hover:rotate-180   " : ""
                  }`}
                >
                  {menu.submenu && <MdKeyboardArrowRight />}
                </div>
                <ul
                  className={`absolute delay-100 duration-300 transition-all  -right-[115%] ${
                    hovered === index && menu?.submenu ? "visible" : "invisible"
                  } top-0  w-[217px] h-[344px]  z-30 bg-white `}
                >
                  {menu?.submenu?.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <span className="hover:text-orange-500 pb-4 pl-3 block transition-colors duration-300">
                        {sub?.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-r ml-4 h-[384px] "></div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Sidebar;
