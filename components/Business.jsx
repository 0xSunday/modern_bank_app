import React from "react";
import { features } from "../Data";
import styles, { layout } from "../Styles";
import Button from "./Button";
import Image from "next/image";
const Business = () => (
  <section
  
    className={` text-white sm:py-16 py-10 flex md:flex-row flex-col ${layout.section}`}
  >
    <div className={`${layout.sectionInfo} `}>
      <h2 className={`${styles.heading2} text-[40px]`}>
        You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-8" />
    </div>

    <div className={`${layout.sectionImg} flex-col justify-start`}>
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`flex flex-row p-6 rounded-[20px] ${
            index !== feature.length - 1 ? "mb:6" : "mb-0"
          } feature-card `}
        >
          <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimblue">
            <Image
              src={feature.icon}
              alt="icons"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[20px] mb-1 ">
              {feature.title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
              {feature.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Business;
