"use client";
import React, { useState } from "react";
import Image from "next/image";
import hamburger from "../../../public/images/hamburger.png";
import { Link } from "react-scroll";
import { Link as I18nLink } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./localeswitcher/LocaleSwitcher";
const Navbar = () => {
  const [shownavbar, setShowNavbar] = useState(false);
  const handleClose = () => {
    setShowNavbar(false);
  };
  const handleOpen = () => {
    setShowNavbar(true);
  };
  const t = useTranslations("Layout.header.navbar");
  return (
    <div className="md:hidden">
      <div onClick={() => handleOpen()} className="fixed right-0 top-0 w-[60px] h-[60px]">
        <Image alt="Hamburger" src={hamburger} fill sizes="(min-width:60px)" />
      </div>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ${
          shownavbar ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-[99]`}
        onClick={() => handleClose()}
      ></div>
      <div
        className={` flex fixed right-0 h-full w-[265px] transform transition-transform duration-500 ${
          shownavbar ? "translate-x-0" : "translate-x-full"
        }  z-[100]`}
      >
        <div
          onClick={() => handleClose()}
          className="bg-black min-w-[36px] h-[36px] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 31.344 31.344"
            width={20}
            height={20}
          >
            <path
              fill="#fff"
              d="M21.049 12.354l-1.715-1.715L29.639.334l1.715 1.714-10.305 10.306zm7.941 18.343l-29-29L1.697-.01l29 29-1.707 1.707zm-16.636-9.649L2.048 31.354.334 29.639l10.305-10.305 1.715 1.714z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <ul className="navbar-items">
          <li className="navbar-item">
            <I18nLink href={"/"}>{t("mainpage")}</I18nLink>
          </li>
          <li className="navbar-item">
            <I18nLink href={"/about"}>{t("aboutpage")}</I18nLink>
          </li>
          <li className="navbar-item">
            <Link
              onClick={() => handleClose()}
              to="PaymentMethodsCarousel"
              smooth={true}
              duration={500}
            >
              {t("paymentMethods")}
            </Link>
          </li>
          <li className="navbar-item">
            <I18nLink href={"/contacts"}>{t("contacts")}</I18nLink>
          </li>
          <li className="navbar-item">
            <I18nLink href={"/register"}>{t("login")}</I18nLink>
          </li>
          <LocaleSwitcher/>
        </ul>
       
      </div>
    </div>
  );
};

export default Navbar;
