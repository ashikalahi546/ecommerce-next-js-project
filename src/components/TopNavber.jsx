import { IoIosArrowDown } from "react-icons/io";

const TopNavber = () => {
  return (
    <div className=" bg-black">
      <div className="w-[1170px] mx-auto text-[#FAFAFA]">
        <div className=" flex justify-end ">
          <div className="flex items-center gap-[231px]  justify-between h-12 ">
            <div className="flex items-center gap-2  ">
              <h3 className="text-sm leading-[21px]">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </h3>
              <button className="text-sm font-semibold leading-6 hover:border-b outline-none">
                ShopNow
              </button>
            </div>
            <div className="cursor-pointer flex items-center gap-[5px] group ">
              <h4 className="text-sm leading-[21px] ">English</h4>
              <IoIosArrowDown className="group-hover:rotate-180 duration-300"/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavber;
