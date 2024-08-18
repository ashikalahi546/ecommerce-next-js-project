import Image from "next/image";
import CountdownTimerTwo from "./CountdownTimerTwo";

const Categories = () => {
  return (
    <div className="w-full h-[500px] bg-black mt-[140px] py-[69px] px-14 flex gap-x-[27px] justify-between">
      <div>
        <h3 className="text-[#00FF66] leading-5 font-semibold">Categories</h3>
        <h1 className="text-5xl leading-[60px] font-semibold text-[#FAFAFA] my-[32px]">
          Enhance Your <span className="block"> Music Experience</span>
        </h1>

        <CountdownTimerTwo/>

    <button className="bg-[#00FF66] h-14 w-[171px] rounded text-white mt-10">Buy Now!</button>

      </div>
      <Image
        src="/images/Frame 694.png"
        width={600}
        height={420}
        
        alt="loading..?"
      />
    </div>
  );
};

export default Categories;
