import React from "react";
import Image from "next/image";
import "../../styles/contacts.scss";
import { useRouter } from "next/navigation";
import YandexMapComponent from "./YandexMapComponent";
import telegramIcon from "../../../public/images/telegram_rounded.svg";
import instagramIcon from "../../../public/images/instagram_logo.png";
import GoogleMapComponent from "./GoogleMapComponent";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const Contacts = () => {
  const t = useTranslations("ContactsPage")
  const router = useRouter();
  return (
    <div className=" contacts_section_wrapper bg-[rgba(255,255,255,1)] relative z-10 px-[5%] py-[100px] font-arsenal flex flex-col">
      <div className="contacts_section flex flex-col">
        <div className="flex text-[14px]">
          <div
            onClick={() => router.push("/")}
            className="px-[3px] text-[rgb(35,191,239)] underline cursor-pointer"
          >
       <Link href={"/"}>{t("main")}</Link>
          </div>
          <span className="px-[3px]">/</span>
          <span className="px-[3px]">{t("title")}</span>
        </div>
        <h1 className="text-[2.5vw] leading-[100%] font-bold mt-[5px] mb-[20px]">
          {t("title")}
        </h1>
        <div className="infos_wrapper w-full flex pt-7 gap-8 ">
          <div className="infos flex flex-col w-[calc(((100%/12)*4)-32px)] gap-8">
            <div className="flex items-center gap-2">
              <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#23bfef] rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 47.78 46.781"
                  data-prefix="i884w2lgz"
                  fill="#fff"
                >
                  <path
                    d="M15.51 13.219c-.35-1.214-2.36-8.214-3.23-9.574a1.465 1.465 0 0 0-.91-.661A3.779 3.779 0 0 0 9 3.453a10.7 10.7 0 0 0-3.04 2.319c-.08.086-.16.174-.24.263a.961.961 0 0 1-.11.123 1.484 1.484 0 0 1-2.09 0 1.459 1.459 0 0 1-.07-2v-.007l.01-.006c.11-.126.22-.251.34-.373A13.629 13.629 0 0 1 7.71.806a6.639 6.639 0 0 1 4.33-.689 4.332 4.332 0 0 1 2.73 1.953c1.16 1.821 3.63 10.537 3.64 10.562l.06.383a6.791 6.791 0 0 1-.92 4.054 9.891 9.891 0 0 1-1.63 1.687c-.75.661-1.53 1.356-1.44 1.571.77 1.924 2.96 4.633 5.49 7.069 2.51 2.428 5.3 4.521 7.26 5.229.21.077.89-.722 1.53-1.487a10.374 10.374 0 0 1 1.64-1.673 7.056 7.056 0 0 1 4.09-1.035l.33.037c.02.006 8.89 2.2 10.73 3.294h.01a4.31 4.31 0 0 1 2.04 2.657 6.535 6.535 0 0 1-.56 4.328 13.569 13.569 0 0 1-2.85 3.989h-.01a13.334 13.334 0 0 1-8.92 4.056l-.14-.006c-8.23-.751-16.51-5.148-22.97-11.379S1.01 21.067 0 12.906l-.01-.143a10.682 10.682 0 0 1 .36-2.922 1.415 1.415 0 0 1 .38-.66 1.479 1.479 0 0 1 2.46 1.475 7.381 7.381 0 0 0-.24 1.92c.93 7.462 5.26 14.929 11.26 20.715s13.6 9.847 21.11 10.555a10.444 10.444 0 0 0 6.79-3.213h-.01a10.46 10.46 0 0 0 2.24-3.089 3.74 3.74 0 0 0 .4-2.382 1.455 1.455 0 0 0-.69-.876c-1.43-.844-8.6-2.641-9.73-2.92a4.3 4.3 0 0 0-2.16.451 8.67 8.67 0 0 0-1.13 1.2c-1.29 1.535-2.65 3.14-4.81 2.358-2.36-.849-5.53-3.2-8.31-5.884s-5.24-5.764-6.18-8.089c-.85-2.129.72-3.523 2.22-4.856a8.88 8.88 0 0 0 1.17-1.168 4.462 4.462 0 0 0 .39-2.175z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="flex flex-col font-bold text-xl">
                <h3>
                  <a href="tel:+998992651490">+998 (99) 265 14 90</a>
                </h3>
                <h3>
                  <a href="tel:+998992641490">+998 (99) 264 14 90</a>
                </h3>
              </span>
            </div>
            <p className="flex items-center gap-1">
              <Image
                alt="telegram logo"
                src={telegramIcon}
                style={{
                  maxWidth: "30px",
                  height: "30px",
                }}
              />
              <span className="text-[#4285F4] text-lg">
                <a href="https://t.me/afsonatouradmin" target="_blank">
                  @afsonatouradmin
                </a>
              </span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                alt="instagram logo"
                src={instagramIcon}
                style={{
                  maxWidth: "30px",
                  height: "30px",
                }}
              />
              <span className="text-[#4285F4] text-lg">
                <a href="https://www.instagram.com/afsona.tour" target="_blank">
                  @afsona.tour
                </a>
              </span>
            </p>
            <p className="text-lg text-[rgb(67,67,67)]">
              {t("address")}
            </p>
            <p className="text-lg text-[rgb(67,67,67)]">
             {t("workingtime")}
            </p>
            <p className="text-lg text-[rgb(67,67,67)]">
            {t("dayoff")}
            </p>
          </div>
          {/* <YandexMapComponent /> */}
          <GoogleMapComponent/>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
