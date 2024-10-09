import React from "react";
import "../../styles/aboutCompany.scss";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
const NotFoundComponent = () => {
  const t = useTranslations("NotFoundPage");
  const router = useRouter();
  return (
    <div className="about_section_wrapper bg-[rgba(255,255,255,1)] relative z-10 px-[5%] py-[100px] font-arsenal flex flex-col">
      <div className="about_section flex flex-col">
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
        <div className="py-[12px]  font-semibold text-4xl leading-[1.6] text-[rgb(67,67,67)]">
          404 Not Found
        </div>
      </div>
    </div>
  );
};

export default NotFoundComponent;
