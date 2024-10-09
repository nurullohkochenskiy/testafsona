import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clickLogo from '../../public/images/Click-01_hjB080W.png'
import humoLogo from '../../public/images/Humo-01.jpg'
import uzcardLogo from '../../public/images/Uzcard-01.png'
import uzumLogo from '../../public/images/Uzum_bank-01.png'
import mastercardLogo from '../../public/images/mastercard-2.svg'
import visaLogo from '../../public/images/visa_1.svg'
import paymeLogo from '../../public/images/payme-01.png'
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollToPlugin); // Register ScrollToPlugin

const PaymentMethodsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const paymentMethods = [
    paymeLogo,
    clickLogo,
    uzcardLogo,
    humoLogo,
    uzumLogo,
    mastercardLogo,
    visaLogo,
  ];

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth / 2; // Scroll by half the carousel width
      const newScrollPosition =
        direction === "right"
          ? carouselRef.current.scrollLeft + scrollAmount
          : carouselRef.current.scrollLeft - scrollAmount;

      gsap.to(carouselRef.current, {
        scrollTo: { x: newScrollPosition }, // Smooth scroll to the new position
        ease: "power1.inOut",
        duration: 0.5,
      });
    }
  };
  const t = useTranslations("Layout.paymentmethods");
  return (
    <div id="PaymentMethodsCarousel" className="w-full px-[5%] py-[40px] font-arsenal">
      <h2 className="text-center text-2xl font-semibold mb-4 ">
        <span className="bg-[rgba(35,191,239,1)] rounded-[20px] py-1 px-2 text-white"> {t("sectionName")}</span>
      </h2>
      <p className="text-center text-lg md:text-xl mb-4 font-semibold"> {t("heading")}</p>
      <div className="relative overflow-hidden">
        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory"
        >
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="min-w-[50%] sm:min-w-[33%] lg:min-w-[25%] snap-start"
            >
              <img
                src={method.src}
                alt={`Payment method ${index + 1}`}
                className="h-40 w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={() => scrollCarousel("left")}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          onClick={() => scrollCarousel("right")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodsCarousel;
