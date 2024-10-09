import React from "react";
import "../../styles/aboutCompany.scss";
import { useRouter } from "next/navigation";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const AboutCompany = () => {
  const t = useTranslations("AboutPage")
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
        <div className="py-[12px]  font-normal text-xl leading-[1.6] text-[rgb(67,67,67)]">
          <p className="mb-6">
         {t("text1")}
          </p>
          {/* <p className="mb-6">
            Примечание. Обращаем Ваше внимание, что текстовая информация на
            сайте должна быть индивидуальной, не скопированной с других
            интернет-ресурсов, о чем указано в рекомендациях Яндекса: «Мы
            стараемся не индексировать или не ранжировать высоко сайты,
            копирующие информацию с других ресурсов и не создающие оригинального
            контента или сервиса».
          </p> */}
          {/* <h3 className="font-bold text-[32px] leading-[1.2] my-[32px]">
            Пример заполнения страницы:
          </h3> */}
          <p className="mb-6">
          {t("text2")}
          </p>
          <p className="mb-6">
          {t("text3")}
          </p>
          <p className="mb-6">
          {t("text4")}
          </p>
          {/* <p className="mb-6">или</p>
          <p className="mb-6">
            {
              "Мы рады предложить вам широкий ассортимент … <укажите предлагаемые товары> по самым выгодным ценам."
            }
          </p>
          <p className="mb-6">
            {
              "Вот уже … <укажите стаж работы компании> лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя нашим клиентам делать заказы через сайт."
            }
          </p>
          <p className="mb-6">
            {
              "За годы успешной работы компания … <введите название компании> приобрела бесценный опыт, о чем свидетельствуют лестные отзывы наших клиентов."
            }
          </p>
          <p>
            {
              "В случае если у Вас возникли вопросы при оформлении заказа, Вы всегда можете обратиться в наш справочный центр по телефону … <укажите номер телефона> или воспользовавшись онлайн-консультантом на сайте."
            }
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
