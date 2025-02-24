import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Section4 = () => {
  return (
    <section className="w-full h-fit flex items-center bg-white justify-center pt-[100px]">
      <div className="w-[1140px] h-[193px] relative flex flex-row items-center justify-between">
        <img src="/Portfolio-copy.jpg" className="absolute top-0 right-0"></img>
        <div className="w-fit h-full flex flex-col">
          <h2 className="text-[18px] font-bold font-montserrat text-[rgb(247,131,170)]">
            LATEST WORKS
          </h2>
          <h3 className="text-[32px] font-extrabold font-montserrat text-black z-10">
            take a look around{" "}
            <span className="text-[rgb(167,98,233)] text-[32px]">
              our<br></br> portfolio.
            </span>
          </h3>
        </div>
        <a
          href="/"
          className="text-[#333333] font-montserrat font-bold text-[14px] bg-white border-2 border-[rgb(167,98,233)] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
        >
          LEARN MORE
          <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 group-hover:top-[-40px] duration-300 right-2 bg-[rgb(167,98,233)] w-10 h-10">
            <BsThreeDots size={"28px"} color={"#ffffff"} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Section4;
