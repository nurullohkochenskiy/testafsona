import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { useLocale, useTranslations } from "next-intl";
import { Link as I18nLink } from "@/i18n/routing";
import LocaleSwitcherbigsc from "./localeswitcher/LocaleSwitcherbigsc";
const NavbarBig = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations("Layout.header.navbar");
  const localelang = useLocale();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/${localelang}/search/${searchQuery}`); // Correctly prepending the locale
      setSearchQuery("");
    }
  };
  return (
    <>
      <div className="hidden md:flex lg-navbar relative z-20  justify-between items-center px-[5%] py-[30px] border-b-[1px] border-[#23BFEF]">
        <div className=" w-[80%] ">
          <ul className="lg-navbar-items">
            <li onClick={() => router.push("/")} className="lg-navbar-item">
              <I18nLink href={"/"}>{t("mainpage")}</I18nLink>
            </li>
            <li className="lg-navbar-item">
              <I18nLink href={"/about"}>{t("aboutpage")}</I18nLink>
            </li>
            <li className="lg-navbar-item">
              <Link to="PaymentMethodsCarousel" smooth={true} duration={500}>
                {t("paymentMethods")}
              </Link>
            </li>
            <li className="lg-navbar-item">
              <I18nLink href={"/contacts"}>{t("contacts")}</I18nLink>
            </li>
            <li className="lg-navbar-item">
              <I18nLink href={"/register"}>{t("login")}</I18nLink>
            </li>
            <LocaleSwitcherbigsc/>
          </ul>
          
        </div>
        <form className="w-[180px] flex items-center gap-[8px] flex-row relative">
     
          <div className="max-w-[173px] flex justify-center items-center">
            <input
              className=" max-w-[173px] border rounded-[250px] px-[20px] py-[15px] text-[14px text-center ]"
              type="text"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
          </div>
          {/* Search button below */}
          <button
            type="submit"
            onClick={handleSearch}
            className="min-w-[49px] h-[49px] border rounded-[250px] border-[#23bfef] flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              data-prefix="i37sjfxl2"
            >
              <path
                d="M23.41 23.412a2 2 0 0 1-2.83 0l-3.53-3.535a1.968 1.968 0 0 1-.29-2.4l-.92-.924a9.645 9.645 0 1 1 .7-.707l.92.923a1.973 1.973 0 0 1 2.41.278l3.54 3.536a2 2 0 0 1 0 2.829zM9.49 1a8.5 8.5 0 1 0 5.84 14.658l.32-.316A8.489 8.489 0 0 0 9.49 1zM22.7 21.288l-3.53-3.536a1.002 1.002 0 1 0-1.42 1.415l3.54 3.535a1 1 0 0 0 1.41-1.411z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      
      </div>
    </>
  );
};

export default NavbarBig;
