import {
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  RightMouseIcon,
  TwitterIcon,
} from "@/icons/Icons";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[440px] bg-black pt-20">
      <div className="w-[1170px] mx-auto flex flex-wrap gap-x-[87px] ">
        <div className="text-[#FAFAFA]">
          <h1 className="text-2xl font-bold leading-6">Exclusive</h1>
          <h3 className="text-xl font-medium leading-7 my-6     ">Subscribe</h3>
          <p className="leading-6">Get 10% off your first order</p>
          <div className="relative mt-4">
            <input
              type="text"
              className="outline-none bg-transparent border border-[#FAFAFA] rounded pl-4 pr-10 w-[217px]  h-12 leading-6 "
              placeholder="Enter your email"
            />
            <span className="absolute top-3 right-4 ">
              <RightMouseIcon />
            </span>
          </div>
        </div>
        <div className="text-[#FAFAFA]">
          <h1 className="text-xl font-medium leading-7">Support</h1>
          <ul className="flex flex-col gap-y-4 mt-6">
            <li className="leading-6 ">
              111 Bijoy sarani, Dhaka,
              <span className="block"> DH 1515, Bangladesh.</span>
            </li>
            <li className="leading-6 my-4">exclusive@gmail.com</li>
            <li className="leading-6 ">+88015-88888-9999</li>
          </ul>
        </div>
        <div className="text-[#FAFAFA]">
          <h1 className="text-xl font-medium leading-7">Account</h1>
          <ul className="flex flex-col gap-y-4 mt-6">
            <li className="leading-6 ">My Account</li>
            <li className="leading-6 ">Login / Register</li>
            <li className="leading-6 ">Cart</li>
            <li className="leading-6 ">Wish list</li>
            <li className="leading-6 ">Shop</li>
          </ul>
        </div>
        <div className="text-[#FAFAFA]">
          <h1 className="text-xl font-medium leading-7">Quick Link</h1>
          <ul className="flex flex-col gap-y-4 mt-6">
            <li className="leading-6 ">Privacy Policy</li>
            <li className="leading-6 ">Terms Of Use</li>
            <li className="leading-6 ">FAQ</li>
            <li className="leading-6 ">Contact</li>
          </ul>
        </div>
        <div className="text-[#FAFAFA]">
          <h1 className="text-xl font-medium leading-7">Download App</h1>
          <div className="flex flex-col gap-y-4 mt-2.5">
            <p className="leading-6 opacity-70 text-xs  font-medium ">
              Save $3 with App New User Only
            </p>

            <div className="flex items-center gap-x-2">
              <Image
                src="/images/Qr Code.png"
                width={80}
                height={80}
                alt="loading...?"
              />
              <div>
                <Image
                  src="/images/googleplay.png"
                  width={104}
                  height={30}
                  alt="loading...?"
                />
                <Image
                  src="/images/appstore.png"
                  width={104}
                  height={30}
                  alt="loading...?"
                  className="mt-2.5"
                />
              </div>
            </div>
            <div className="flex items-center gap-6 mt-2">
              <span className="cursor-pointer">
                <FacebookIcon />
              </span>

              <Image
                src="/images/Icon-Twitter.png"
                width={24}
                height={24}
                alt="loading...?"
                className="cursor-pointer"
              />
              <span className="cursor-pointer">
                <InstagramIcon />
              </span>
              <span className="cursor-pointer">
                <LinkedIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
