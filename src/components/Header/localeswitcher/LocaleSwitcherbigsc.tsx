import React, { ChangeEvent, useState, useTransition } from "react";
import clsx from "clsx";
import { Locale, useRouter, usePathname, routing } from "@/i18n/routing";
import uzbFlag from "../../../../public/images/uzbekistanflag.png";
import rusFlag from "../../../../public/images/russiaflag.png";
import usaFlag from "../../../../public/images/usaflag.png";
import Image from "next/image";
import { useLocale } from "next-intl";

// Define the Locale type if not imported from elsewhere

const LocaleSwitcherbigsc = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const locales = [
    { locale: "uz", label: "UZ", flag: uzbFlag },
    { locale: "ru", label: "RU", flag: rusFlag },
    { locale: "en", label: "EN", flag: usaFlag },
  ];

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="relative inline-block text-left">
      <div className="rounded border border-[rgb(35,191,239)] px-4 py-2">
        <button
          className={clsx(
            "flex items-center space-x-2 focus:outline-none",
            isPending && "opacity-50"
          )}
          onClick={toggleDropdown} // Toggle the dropdown on click
        >
          <Image
            src={locales.find((loc) => loc.locale === locale)?.flag || usaFlag}
            alt="Selected Flag"
            width={20}
            height={12}
          />
          <span className="text-lg">
            {locales.find((loc) => loc.locale === locale)?.label}
          </span>
        </button>
      </div>

      {isDropdownOpen && ( // Show dropdown only if it's open
        <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg">
          {locales.map(({ locale, label, flag }) => (
            <div
              key={locale}
              className="flex items-center space-x-2 px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() =>
                onSelectChange({
                  target: { value: locale },
                } as ChangeEvent<HTMLSelectElement>)
              }
            >
              <Image src={flag} alt={label} width={20} height={12} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcherbigsc;
