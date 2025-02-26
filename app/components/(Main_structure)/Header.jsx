"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

const Navbar_data = [
  { label: "Home", navs: { nav1: "Home I", nav2: "Home II" } },
  { label: "About Us", navs: { nav1: "About me", nav2: "About Us I" } },
  { label: "Portfolio", navs: { nav1: "Portfolio I", nav2: "Portfolio II" } },
  { label: "Page", navs: { nav1: "Page I", nav2: "Page II" } },
  { label: "Blog", navs: { nav1: "Blog I", nav2: "Blog II" } },
  { label: "Contact Us", navs: { nav1: "Contact I", nav2: "Contact II" } },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <section
      className="flex items-center justify-center w-full h-fit m-auto fixed top-0 z-50 duration-300"
      style={{
        backgroundColor: visible ? "rgba(255, 255, 255, 0.8)" : "transparent",
        boxShadow: visible ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
        color: visible ? "#000000" : "#ffffff",
      }}
    >
      <div className="w-[1140px] max-[1200px]:w-full max-[1200px]:px-[50px] h-fit flex flex-row items-center">
        <div className="w-full h-full py-[30px] flex justify-between px-[15px]">
          <a href="/">
            <Image
              src="/logo_4.png"
              width={118}
              height={49}
              alt="logo"
              className="cursor-pointer"
            />
          </a>

          {!isMobile ? (
            <ul className="flex flex-row text-[15px] font-mulish font-bold justify-between items-center">
              {Navbar_data.map((item, index) => (
                <li
                  key={index}
                  className="px-[20px] py-3 cursor-pointer group hover:text-[#ff9a00] duration-300 relative"
                >
                  <a href={`/${item.label.toLowerCase().replace(" ", "-")}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div
              className="cursor-pointer h-full flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <VscThreeBars size={30} />
            </div>
          )}

          {isMobile && menuOpen && (
            <div
              className="fixed top-0 right-0 w-full h-full shadow-md p-4 flex flex-col justify-center"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="absolute top-10 right-10 p-4 cursor-pointer">
                <IoCloseOutline
                  className="hover:text-[#ff9a00] text-[#ffffffb5] text-[40px] duration-300"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              </div>
              {Navbar_data.map((item, index) => (
                <a
                  key={index}
                  href={`/${item.label.toLowerCase().replace(" ", "-")}`}
                  className="px-4 hover:text-[#ff9a00] duration-300 text-[25px] text-[#ffffffb5] py-[15px] w-full h-fit text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
