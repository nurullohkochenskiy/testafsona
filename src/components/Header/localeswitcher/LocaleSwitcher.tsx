import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import { Locale, usePathname, useRouter, routing } from "@/i18n/routing";
import clsx from "clsx";
import Image from "next/image";
import uzbFlag from "../../../../public/images/uzbekistanflag.png";
import rusFlag from "../../../../public/images/russiaflag.png";
import usaFlag from "../../../../public/images/usaflag.png";
const LocaleSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const locales: Locale[] = ["uz", "ru", "en"];

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    }
  };

  return (
    <div className="py-[20px] px-[15px] flex justify-between">
      {locales.map((cur) => (
        <span
          key={cur}
          className={clsx(
            "border px-1 rounded hover:border-[rgb(35,191,239)]",
            locale === cur && "active-locale" // Add the active class to the current locale
          )}
          onClick={() => handleLocaleChange(cur)}
        >
          {cur === "uz" ? (
            <span className="flex items-center gap-[2px]">
              <div className=" h-[12px]">
                <Image src={uzbFlag}  alt="UzbFlag" style={{ height: '12px', width: 'auto' }} />
              </div>
              UZ
            </span>
          ) : cur === "ru" ? (
            <span className="flex items-center gap-[2px]">
            <div className=" h-[12px]">
              <Image src={rusFlag}  alt="RUSFlag" style={{ height: '12px', width: 'auto' }} />
            </div>
            RU
          </span>
          ) : (
            <span className="flex items-center gap-[2px]">
            <div className=" h-[12px]">
              <Image src={usaFlag}  alt="usaFlag" style={{ height: '12px', width: 'auto' }} />
            </div>
            EN
          </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
