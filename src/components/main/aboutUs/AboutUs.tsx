import React from "react";
import "../../../styles/aboutUs.scss";
import { useTranslations } from "next-intl";
const AboutUs = () => {
  const t = useTranslations("HomePage.aboutus")
  return (
    <div className="about__container__wrapper relative z-10 font-arsenal">
      <div className="about__container">
        <div className="mainpic__wrapper">
          <div className="mainpic"></div>
        </div>
        <div className="text">
          <div className="logo">
            <div className="dot"></div>
            <div className="text__logo text-white">{t("sectionName")}</div>
          </div>
          <h1>{t("heading")}</h1>
          <div className="main__info">
            <p>
            {t("headingtext")}
            </p>
            {/* <p>
              Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari
              individual bo'lishi kerak, boshqa Internet-resurslardan
              ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz
              boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original
              kontent yaratmaydigan yoki yuqori darajadagi saytlarni
              indekslamaslikka yoki reyting qilmaslikka harakat qilamiz."
            </p> */}
          </div>
          <div className="">
            <div className="my-[20px]">
              <div className="my-[10px] sm:mb-[5px] sm:mt-0 text-[18px] font-bold md:text-[20px]">
               {t("pricingpolicy")}
              </div>
              <div className="text-[rgba(129,129,129,1)] text-[13px] leading-[16px] font-normal sm:text-[16px] sm:leading-[22px] ">
               {t("pricingpolicycontent")}
              </div>
            </div>
            <div className="my-[20px]">
              <div className="my-[10px] sm:mb-[5px] sm:mt-0 text-[18px] font-bold md:text-[20px]">
                {t("alldaywork")}
              </div>
              <div className="text-[rgba(129,129,129,1)] text-[13px] leading-[16px] font-normal sm:text-[16px] sm:leading-[22px] ">
               {t("alldayworkcontent")}
              </div>
            </div>
          </div>
        </div>
        <div className="pics">
          <div className="firstpic"></div>
          <div className="secondpic"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
