import { EyeIcon, LoveTwoIcon } from "@/icons/Icons";
import { productsData } from "./data/ProductsData";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const Products = () => {
  return (
    <div className="mt-[71px]">
      <SectionTitle
        heading={""}
        subHeading={"Our Products"}
        titleHeading={"Explore Our Products"}
      />

      <div className="grid grid-cols-4 gap-[30px]">
        {productsData?.map((product) => (
          <div key={product.id}>
            <div className="group relative">
              <div className="bg-[#F5F5F5] h-[250px] py-[35px] rounded">
                <div className="absolute top-3 left-3">
                  {product.newCollection && (
                    <div className="bg-[#00FF66] text-white w-[51px] h-[26px] rounded text-xs leading-[18px] flex items-center justify-center">
                      <span>{product?.newCollection}</span>
                    </div>
                  )}
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
                <div className="flex justify-center ">
                  <Image
                    src={product?.image}
                    width={190}
                    height={180}
                    alt="loading...?"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="w-full h-[41px] bg-black invisible group-hover:visible absolute bottom-0 rounded-b flex items-center justify-center">
                <button className="text-white font-medium leading-6">
                  Add To Cart
                </button>
              </div>
            </div>
            <h3 className="mt-4 leading-6 font-medium">{product?.name}</h3>
            <div className="flex items-center gap-x-3">
              <h3 className="text-[#DB4444] font-medium leading-6 my-2 text-base">
                {product?.price}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[60px] flex justify-center">
    <button className="bg-[#DB4444] h-14 w-[236px] rounded text-white font-medium leading-6 ">View All Products</button>
    </div>
    </div>
  );
};

export default Products;
