import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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
gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin
interface PicturesProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}
const Pictures: React.FC<PicturesProps> = ({ setIsModalOpen }) => {
  const t = useTranslations("HomePage.tourlist");
  const carouselRef = useRef<HTMLDivElement>(null);
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

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const carouselItem = carouselRef.current.querySelector(
        ".carousel-item"
      ) as Element | null;
      if (carouselItem) {
        const itemWidthPercentage = getComputedStyle(carouselItem).minWidth;
        const scrollAmount =
          carouselRef.current.offsetWidth *
          (parseFloat(itemWidthPercentage) / 100);
        const newScrollPosition =
          direction === "right"
            ? carouselRef.current.scrollLeft + scrollAmount
            : carouselRef.current.scrollLeft - scrollAmount;

        gsap.to(carouselRef.current, {
          scrollTo: { x: newScrollPosition },
          ease: "power1.inOut",
          duration: 0.5,
        });
      }
    }
  };

  return (
    <div
      className="relative z-20 w-full py-8 bg-gray-100 px-[5%]"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(246, 246, 246, 0) 20%, #23bfef 20%, #23bfef 80%, rgba(246, 246, 246, 0) 80%)",
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory "
          ref={carouselRef}
        >
          {pics.map((image, index) => (
            <div className="carousel-item snap-start" key={index}>
              <div className=" bg-white m-2">
                <div className="relative h-48">
                  <Image
                    alt={image.name}
                    src={image.src}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{image.name}</h3>
                  <p className="text-gray-500 mt-2  description">{image.description}</p>
                  <p className="mt-4 font-semibold">
                    <span className="text-green-500">$</span> {t("price")}:{" "}
                    <span className="font-bold">
                      {image.price} {t("currency")}
                    </span>
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 w-full bg-[#23bfef] text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 border border-[#23bfef] p-2 rounded-full"
          onClick={() => scrollCarousel("left")}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 border border-[#23bfef] p-2 rounded-full"
          onClick={() => scrollCarousel("right")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Pictures;
