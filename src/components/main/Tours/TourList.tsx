import React from "react";
import "../../../styles/tourlist.scss";
import { useTranslations } from "next-intl";
const TourList = () => {
  const t = useTranslations("HomePage.tourtypes")
  return (
    <>
      <div className="relative z-10 flex flex-col justify-center items-center px-[5%] tourlist md:pt-[80px] md:pb-[50px]  font-arsenal ">
        <div className="flex flex-col justify-center text-white">
          <span className="font-extrabold text-[26px] ">{t("sectionName")}</span>
          <span className="text-[18px] opacity-[60%]">
            {t("epigraph")}
          </span>
        </div>
        <div className="tour-list flex w-full flex-wrap items-center font-bold md:mt-[30px] uppercase">
          <div className="item-container">
            <div className="tour-items">{t("bustour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("skitour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("Cruise")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("kidstour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("medicaltour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("seatour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("shoppingtour")}</div>
          </div>
          <div className="item-container">
            <div className="tour-items">{t("excursiontour")}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourList;
