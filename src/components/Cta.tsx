"use client";

import React, { useState } from "react";
import greatWall from "../../public/images/vietnambg.jpg";
import parisPic from "../../public/images/paris.png";
import "animate.css"; // Import Animate.css
import { useTranslations } from "next-intl";
interface CtaProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
const Cta: React.FC<CtaProps> = ({ setIsModalOpen }) => {
  const [backgroundImage, setBackgroundImage] = useState(greatWall);
  // const [isTransitioning, setIsTransitioning] = useState(false);
 
  let startX: number, startY: number, endX: number, endY: number;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.changedTouches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    detectSwipe();
  };

  const detectSwipe = () => {
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > 50 || Math.abs(diffY) > 50) {
      // Any swipe detected, toggle the background
      setBackgroundImage((prev) => (prev === greatWall ? parisPic : greatWall));
    }
  };
  // const changeToChina = () => {
  //   if (backgroundImage !== greatWall) {
  //     setBackgroundImage(greatWall);
  //   }
  // };
  // const changeToParis = () => {
  //   if (backgroundImage !== parisPic) {
  //     setBackgroundImage(parisPic);
  //   }
  // };
  const swapBg = () => {
    if (backgroundImage === greatWall) {
      setBackgroundImage(parisPic);
    } else {
      setBackgroundImage(greatWall);
    }
  };
const t= useTranslations("HomePage.cta")
  return (
    <div className="relative z-10 flex justify-center min-h-[480px] pt-[40px]  md:pt-0 cta_clouds">
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          width: "100%",
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
        className="mx-[5%] flex justify-center items-center rounded-[20px]"
      >
        <div
          className="absolute inset-0 transition-colors duration-600 ease-in-out"
          style={{
            borderRadius: "20px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(32, 36, 44, 0.31)",
            transition: "background-color 0.6s ease",
            zIndex: 1,
          }}
        />
        <div className="w-[90%] text-white relative z-10">
          {/* Bouncing text */}
          <div className="animate__animated animate__bounce px-[16px] py-[5px] border border-dashed rounded-[25px] border-[rgba(35,191,239,1)] text-center">
            <span className="text-[13px] font-light uppercase [@media(min-width:480px)]:text-[18px] font-arsenal">
             {t("heading")}
            </span>
          </div>

          {/* Sliding text */}
          <div className="animate__animated animate__slideInRight px-[16px] pt-[5px] text-center mt-[5px]">
            <span className="italic uppercase break-words text-[20px] leading-[20px] font-thin text-center [@media(max-width:767px)]:text-[24px] sm:text-[32px]  font-arsenal">
              {t("motto")}
            </span>
          </div>

          {/* Sliding text with slower animation */}
          {/* <div className="animate__animated animate__slideInRight px-[16px] text-center">
            <span className="font-bold uppercase xl:text-[3vw] [@media(max-width:767px)]:text-[24px] sm:text-[30px] font-arsenal">
              Sayohat
            </span>
          </div> */}

          {/* Button */}
          <div className="flex justify-center mt-[40px]">
            <div
              onClick={() => setIsModalOpen(true)}
              className="order_call bg-[#23bfef] rounded-[250px] cursor-pointer px-[30px] py-[16px] font-arsenal"
            >
              {t("ordercallbtn")}
            </div>
          </div>
        </div>

        {/* Arrows for background swap */}
        <div className="hidden sm:flex absolute bottom-0 right-0 items-center pr-[5%] pb-[30px] z-20">
          <div
            className="min-w-[50px] min-h-[50px] flex items-center justify-center cursor-pointer"
            onClick={() => swapBg()}
            style={{ pointerEvents: "auto" }}
          >
            <svg
              fill="#fff"
              className="w-[35px] h-[35px] "
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="45"
              viewBox="0 0 22 45"
            >
              <path
                d="M22.01 44.993l-22.02-22.5L22.01.001l-.49 4.5L3.9 22.5l17.62 18z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => swapBg()}
            className="min-w-[50px] min-h-[50px] flex items-center justify-center cursor-pointer"
          >
            <svg
              fill="#fff"
              className="w-[35px] h-[35px] "
              xmlns="http://www.w3.org/2000/svg"
              width="22.44"
              height="45.062"
              viewBox="0 0 22.44 45.062"
            >
              <path
                d="M-.01 45.056l22.45-22.527L-.01.006l.5 4.506 17.97 18.017L.49 40.55z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
