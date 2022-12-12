import React from "react";
import { arrowUp } from "../public/assets";
import Image from "next/image";
const Button = ({ styles }) => {
  return (
    <button
      type="text"
      className={`  flex flex-row justify-center items-center py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-xl ${styles}`}
    >
      Get Started
      <Image className="text-black ml-2" src={arrowUp} alt="get started " />
    </button>
  );
};

export default Button;
