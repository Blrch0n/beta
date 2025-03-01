"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`w-[50px] h-[50px] bg-[#262626] rounded-full flex items-center justify-center 
      shadow-[0px_0px_10px_3px_#ff9a0085] fixed bottom-[70px] right-[100px] 
      animate-[bounceCustom_2s_infinite] cursor-pointer transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUpLong color="#fd7e14" size={20} />
    </button>
  );
};

export default BackToTop;
