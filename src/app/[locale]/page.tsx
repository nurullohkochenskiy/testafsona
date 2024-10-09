"use client";
import bg1 from "../../../public/images/vietnambg2.jpg";
import Header from "@/components/Header/Header";
import Cta from "@/components/Cta";
import TourList from "@/components/main/Tours/TourList";
import Pictures from "@/components/main/pictures/Pictures";
import AboutUs from "@/components/main/aboutUs/AboutUs";
import OrderTour from "@/components/main/order/OrderTour";
import OrderModal from "@/components/OrderModal";
import { useState } from "react";
import PaymentMethodsCarousel from "@/components/PaymentMethodsCarousel";
import FooterContacts from "@/components/footer/FooterContacts";
import BookTour from "@/components/booktour/BookTour";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  return (
    <>
      <OrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="z-10 absolute left-1/2 top-0 bottom-0 w-[60%] md:w-[20%] -translate-x-1/2 bg-[#23BFEF]" />
      <div
        className="relative z-9"
        style={{
          width: "100%",
          backgroundImage: `url(${bg1.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition:
            "left 0px top 0px, left calc(-1px + 50%) bottom -61px, left 0px top 0px, center top 0",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        }}
      >
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Cta isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <TourList />
        <BookTour />
        <Pictures isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <AboutUs />
      </div>
      <OrderTour />
      <PaymentMethodsCarousel />
      <FooterContacts />
    </>
  );
}
