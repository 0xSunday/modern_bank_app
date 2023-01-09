import React from "react";
import styles from "../Styles";
import { arrowUp } from "../public/assets";
import Image from "next/image";
const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ">
      <div className=" flex flex-col justify-center items-center bg-primary hover:bg-black w-[100%] h-[100%] rounded-full">
        <div className="flex flex-row justify-center items-center ">
          <p className="font-poppins font-medium text-[18px] leading-[23px] flex ">
            <span className="text-gradient"> Get </span>
          </p>
          <Image src={arrowUp} alt="getStated" className="w-[23px] h-[23px]" />
        </div>
        <div className="flex flex-row justify-center items-center ">
          <p className="font-poppins font-medium text-[18px] leading-[23px] flex ">
            <span className="text-gradient"> Started </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
