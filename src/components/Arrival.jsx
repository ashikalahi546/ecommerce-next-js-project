import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Gucci from "/public/images/gucci.png";
import Women from "/public/images/women.png";
import Speaker from "/public/images/speaker.png";
import PlayStation from "/public/images/playstation.png";

const Arrival = () => {
  return (
    <div className="my-[140px]">
      <SectionTitle
        heading={""}
        subHeading={"Featured"}
        titleHeading={"New Arrival"}
      />

      <div className="grid grid-cols-2 gap-[30px]">
        <div className="bg-black h-[600px] flex items-center justify-center relative rounded">
          <Image src={PlayStation} alt="loading" className="ml-20" />
          <div className="text-[#FAFAFA] absolute bottom-[32px] left-[32px]">
            <h1 className="text-2xl font-semibold leading-6">PlayStation 5</h1>
            <p className="text-sm leading-[21px] py-4">
              Black and White version of the PS5{" "}
              <span className="block">coming out on sale.</span>{" "}
            </p>
            <button className="border-b font-medium leading-6">Shop Now</button>
          </div>
        </div>
        <div>
          <div className="bg-black h-[284px] flex items-center justify-end relative rounded">
            <Image src={Women} alt="loading" className="rounded-r" />
            <div className="text-[#FAFAFA] absolute bottom-6 left-6">
              <h1 className="text-2xl font-semibold leading-6">
                Women’s Collections
              </h1>
              <p className="text-sm leading-[21px] py-4">
                Featured woman collections that
                <span className="block"> give you another vibe.</span>{" "}
              </p>
              <button className="border-b font-medium leading-6">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex gap-[30px] mt-[32px]">
            <div className=" relative rounded">
              <Image src={Speaker} alt="loading" />
              <div className="text-[#FAFAFA] absolute bottom-6 left-6">
                <h1 className="text-2xl font-semibold leading-6">Speakers</h1>
                <p className="text-sm leading-[21px] py-4">
                  Amazon wireless speakers
                </p>
                <button className="border-b font-medium leading-6">
                  Shop Now
                </button>
              </div>
            </div>
            <div className=" relative rounded">
              <Image src={Gucci} alt="loading" />
              <div className="text-[#FAFAFA] absolute bottom-6 left-6">
                <h1 className="text-2xl font-semibold leading-6">Perfume</h1>
                <p className="text-sm leading-[21px] py-4">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="border-b font-medium leading-6">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-[88px] mt-[140px] justify-items-center">
        <div className="flex items-center flex-col">
          <Image
            src="/images/Services.png"
            width={80}
            height={80}
            alt="loading"
          />
          <h1 className="text-xl font-semibold leading-7 mt-6 mb-2">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-sm leading-[21px]">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Image
            src="/images/Services (1).png"
            width={80}
            height={80}
            alt="loading"
          />
          <h1 className="text-xl font-semibold leading-7 mt-6 mb-2">
          24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-sm leading-[21px]">
          Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Image
            src="/images/Services (2).png"
            width={80}
            height={80}
            alt="loading"
          />
          <h1 className="text-xl font-semibold leading-7 mt-6 mb-2">
          MONEY BACK GUARANTEE
          </h1>
          <p className="text-sm leading-[21px]">
          We reurn money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
