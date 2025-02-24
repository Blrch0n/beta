import React from "react";
import { FaPlay } from "react-icons/fa";

const Section3 = () => {
  return (
    <section
      className="w-full h-[403px] flex bg-slate-500 justify-center items-center bg-cover"
      style={{ backgroundImage: "url(/video-promo.jpg)" }}
    >
      <div className="w-[1140px] h-full flex flex-row justify-between items-center">
        <h2 className=" font-bold text-[32px] font-montserrat">
          we create successful digital<br></br> products
        </h2>
        <a className="w-[67px] h-[67px] flex items-center justify-center bg-[#ff9a00] cursor-pointer rounded-full">
          <FaPlay color="white " />
        </a>
      </div>
    </section>
  );
};

export default Section3;
