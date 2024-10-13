import Image from "next/image";
import dubai from "../../../../public/images/dubai.jpg";
import egypt from "../../../../public/images/egypt.jpg";
import kuala_lumpur from "../../../../public/images/kuala-lumpur.jpg";
import paris from "../../../../public/images/paris.png";
import stambul from "../../../../public/images/stambul.webp";
import safari from "../../../../public/images/safari_dubai.jpg";
import thailand from "../../../../public/images/thailand.jpg";
import georgia from "../../../../public/images/georgia.jpg";
import vietnam from "../../../../public/images/vietnam.avif";

import "../../../styles/pictures.scss";
import { useTranslations } from "next-intl";

interface PicturesProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
const Pictures: React.FC<PicturesProps> = ({ setIsModalOpen }) => {
  const t = useTranslations("HomePage.tourlist");
  const pics = [
    {
      src: dubai,
      name: t("cities.burjKhalifa.name"),
      description: t("cities.burjKhalifa.desctiption"),
      price: "6.000.000",
    },
    {
      src: egypt,
      name: t("cities.sharmelsheikh.name"),
      description: t("cities.sharmelsheikh.desctiption"),
      price: "10.000.000",
    },
    {
      src: kuala_lumpur,
      name: t("cities.kualalumpur.name"),
      description: t("cities.kualalumpur.desctiption"),
      price: "10.000.000",
    },
    {
      src: paris,
      name: t("cities.paris.name"),
      description: t("cities.paris.desctiption"),
      price: "10.000.000",
    },
    {
      src: stambul,
      name: t("cities.istanbul.name"),
      description: t("cities.istanbul.desctiption"),
      price: "7.500.000",
    },
    {
      src: safari,
      name: t("cities.safari.name"),
      description: t("cities.safari.desctiption"),
      price: "6.000.000",
    },
    {
      src: thailand,
      name: t("cities.thailand.name"),
      description: t("cities.thailand.desctiption"),
      price: "10.000.000",
    },
    {
      src: georgia,
      name: t("cities.georgia.name"),
      description: t("cities.georgia.desctiption"),
      price: "10.000.000",
    },
    {
      src: vietnam,
      name: t("cities.Vietnam.name"),
      description: t("cities.Vietnam.desctiption"),
      price: "10.000.000",
    },
  ];
  return (
    <div className="tourpics relative z-10 font-arsenal">
      <div className="pic_list">
        <div className="pic_cards_wrapper relative">
          {pics.map((place, i) => (
            <div key={i} className="pic_card relative">
              <div className="img_wrapper relative">
                <Image
                  alt={place.name}
                  src={place.src}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(min-width:150px)"
                />
              </div>

              <div className="info flex flex-col">
                <div className="country font-bold ">{place.name}</div>
                <div className="text_info text-slate-500 ">
                  {place.description}
                </div>
                <div className="price_info">
                  <span className="font-bold text-green-500">$ </span>
                  {t("price")}:{" "}
                  <span className="price">
                    {place.price} {t("currency")}
                  </span>
                </div>
                <div className="openform_btn_container ">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="openform_btn "
                  >
                    {t("moredetailsbtn")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="invite-text">
        <div className="text">{t("text1")}</div>
        <div className="text">{t("text2")}</div>
      </div>
    </div>
  );
};
export default Pictures;
