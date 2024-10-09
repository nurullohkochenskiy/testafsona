import React from "react";
import "../../styles/aboutCompany.scss";
import { useRouter } from "next/navigation";
import pagesContent from "./pagesContent";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface SearchComponentProps {
  term: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ term }) => {
  const t = useTranslations("SearchPage")
  const router = useRouter();
  const [results, setResults] = useState<
    { url: string; title: string; content: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const HandleSeach = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (term) {
      const searchTerm = term.toLowerCase();
      // Search the content of each page
      const filteredResults = pagesContent.filter(
        (page) =>
          page.title.toLowerCase().includes(searchTerm) ||
          page.content.toLowerCase().includes(searchTerm)
      );
      setResults(filteredResults);
      setIsLoading(false); // Set loading to false after search is complete
    }
  }, [term]);

  return (
    <div className="about_section_wrapper bg-[rgba(255,255,255,1)] relative z-10 px-[5%] py-[100px] font-arsenal flex flex-col">
      <div className="about_section flex flex-col">
        <div className="flex text-[14px]">
          <div
            onClick={() => router.push("/")}
            className="px-[3px] text-[rgb(35,191,239)] underline cursor-pointer"
          >
            {t("main")}
          </div>
          <span className="px-[3px]">/</span>
          <span className="px-[3px]">{t("title")}</span>
        </div>
        <h1 className="text-[2.5vw] leading-[100%] font-bold mt-[5px] mb-[20px]">
          {t("title")}
        </h1>
        <div className="py-[12px]  font-normal text-lg leading-[1.6]">
          <form onSubmit={HandleSeach} className="flex flex-row gap-2 ">
            <div className="flex ">
              <input
                className="border rounded-[4px] px-2 py-1"
                type="text"
                name=""
                id=""
              />
            </div>
            <button
              type="submit"
              className="bg-[rgb(35,191,239)] rounded-[4px] px-2 py-1 text-white"
            >
              {t("buttontitle")}
            </button>
          </form>
        </div>
        <div>
          <h3>{t("results")}:</h3>
          {isLoading ? (
            <p>{t("loadingmsg")}</p> // Show loading message while searching
          ) : results.length > 0 ? (
            <>
              <p className="pb-3 text-lime-600">
                {t("foundmsg")}
              </p>
              {results.map((page) => {
                return (
                  <p
                  key={page.title}
                    onClick={() => router.push(page.title)}
                    className="text-[rgb(35,191,239)] underline cursor-pointer pb-3"
                  >
                    {page.title}
                  </p>
                );
              })}
            </>
          ) : (
            <p className="text-red-600">{t("notfound")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
