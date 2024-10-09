import React from "react";
import { useRouter } from "next/navigation";
import "../../styles/footer/footerContacts.scss";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const FooterContacts = () => {
  const router = useRouter();
  const t = useTranslations("Layout.footer");
  return (
    <div className="flex footer_contacts_wrapper py-[4%] px-[5%] text-white justify-between">
      {/* First Div with Animation */}
      <div className="w-[48%] flex flex-col justify-start">
        <p className="text-[15px] text-[rgba(255,255,255,0.7)]">
          {t("contactus")}
        </p>
        <h1 className="text-[28px] font-semibold">
          <a href="tel:+998992651490">+998 (99) 265 14 90</a>
        </h1>
      </div>

      {/* Second Div with Animation */}
      <div className="w-[48%] flex flex-col justify-start">
        <p className="text-[15px] text-[rgba(255,255,255,0.7)] pb-[6px]">
          {t("ourlocation")}
        </p>
        <h4 className="text-[20px] font-semibold pb-[4%]">{t("location")}</h4>
        <div className="flex text-[16px] text-[rgb(127,127,127)] cursor-pointer ">
          <span className="underline-effect">
            <Link href={"/contacts"}>{t("openinmaps")}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
