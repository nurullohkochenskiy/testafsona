"use client";
import React from "react";
import Forehead from "./Forehead";
import Navbar from "./Navbar";
import NavbarBig from "./NavbarBig";
import cloudsUp from "../../../public/images/cloud2.png";
import "../../styles/header.scss";

interface HeaderProps {
  setIsModalOpen: (isOpen: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({  setIsModalOpen }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${cloudsUp.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-20">
          <div className="bg-[#23BFEF] z-20 md:bg-transparent">
            <Navbar />
            <NavbarBig />
            <Forehead
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[60%] md:w-[20%] -translate-x-1/2 bg-[#23BFEF] z-10" />
      </div>
    </>
  );
};

export default Header;
