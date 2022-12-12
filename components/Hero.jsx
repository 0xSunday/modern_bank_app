import React from "react";
import Styles from "../Styles";
import { discount, robot } from "../public/assets";
import GetStarted from "../components/GetStarted";
import Image from "next/image";
const Hero = () => (
  <section id="home" className="flex flex-1 md:flex-row flex-col sm:py-16 py-6">
    <div className="flex-1 flex  justify-center items-start flex-col xl:px-0 sm:px-16 px-6 ">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className="font-poppins font-normal text-dimWhite text-[14px] sm:text-[18px] leading-[30.8px]">
          <span className="text-white">20% </span>
          discount for <span className="text-white"> 1 Month </span>
          Account
        </p>
      </div>

      <div className=" flex flex-row  items-center w-full ">
        <h1 className="font-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ml-5">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        <span className="text-gradient">Payment Methods</span>
      </h1>
      <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div>
      <Image
        src={robot}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5] mt-5"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 whtie__gradient "></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "></div>
    </div>
    <div className="sm:hidden flex justify-center items-center my-10">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
