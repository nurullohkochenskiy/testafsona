import Image from "next/image";
import dubai from "../../../../public/images/dubai.jpg";
import egypt from "../../../../public/images/egypt.jpg";
import kuala_lumpur from "../../../../public/images/kuala-lumpur.jpg";
import paris from "../../../../public/images/paris.png";
import langkawi from "../../../../public/images/langkawi.jpg";
import stambul from "../../../../public/images/stambul.webp";
import penang from "../../../../public/images/penang.webp";
import marina from "../../../../public/images/dubai_marina.png";
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
  const tours = [
    {
      src: dubai,
      name: `${t("cities.burjKhalifa")}`,
      price: `6.000.000 ${t("currency")}`,
    },
    {
      src: egypt,
      name: `${t("cities.sharmelsheikh")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: kuala_lumpur,
      name: `${t("cities.kualalumpur")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: paris,
      name: `${t("cities.paris")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: langkawi,
      name: `${t("cities.langkawi")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: stambul,
      name: `${t("cities.istanbul")}`,
      price: `7.500.000 ${t("currency")}`,
    },
    {
      src: penang,
      name: `${t("cities.penang")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: marina,
      name: `${t("cities.marina")}`,
      price: `6.000.000 ${t("currency")}`,
    },
    {
      src: safari,
      name: `${t("cities.safari")}`,
      price: `6.000.000 ${t("currency")}`,
    },
    {
      src: thailand,
      name: `${t("cities.thailand")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: georgia,
      name: `${t("cities.georgia")}`,
      price: `10.000.000 ${t("currency")}`,
    },
    {
      src: vietnam,
      name: `${t("cities.Vietnam")}`,
      price: `10.000.000 ${t("currency")}`,
    },
  ];
  return (
    <div className="tourpics relative z-10 font-arsenal">
      <div className="pic">
        {tours.map((image, index) => (
          <div
            key={index}
            onClick={() => setIsModalOpen(true)}
            className="pic-cards-wrapper relative"
          >
            <div className="pic-cards relative">
              <div className="img-wrapper relative">
                <Image
                  alt={image.name}
                  src={image.src}
                  fill
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                   sizes="(min-width:150px)"
                />
              </div>
              <div className="info absolute bottom-0 left-0 flex flex-col">
                <div className="country font-bold text-[22px]">
                  {image.name}
                </div>
                <div className="date-info text-[rgba(255,255,255,0.6)] text-[14px]">
                  {t("price")}:{" "}
                  <span className="date text-white font-semibold text-[15px]">
                    {image.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="invite-text">
        <div className="text">{t("text1")}</div>
        <div className="text">{t("text2")}</div>
      </div>
    </div>
  );
};
export default Pictures;
