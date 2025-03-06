"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { useRevealOnce } from "../(Main_structure)/useRevealOnce";

const Section3 = () => {
  const [ref, revealed] = useRevealOnce(0.3);
  return (
    <section
      ref={ref}
      className={`w-full h-[403px] max-[1200px]:h-[283px] max-[1200px]:px-20 flex bg-slate-500 justify-center items-center bg-cover object-cover transition-opacity duration-700 ${
        revealed ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url(/video-promo.jpg)" }}
    >
      <div className="max-w-[1140px] w-full h-full flex flex-row justify-between items-center">
        <h2 className="font-bold text-[32px] font-montserrat">
          we create successful digital
          <br /> products
        </h2>
        <a className="relative w-[67px] h-[67px] flex items-center justify-center bg-[#ff9a00] cursor-pointer rounded-full ">
          {/* The ripple effect span */}
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-0"></span>
          <span className="absolute top-0 m-auto w-full h-full rounded-full border-2 border-white animate-ripple delay-75"></span>
          <FaPlay color="white" className="relative z-10" />
        </a>
      </div>
    </section>
  );
};

export default Section3;
