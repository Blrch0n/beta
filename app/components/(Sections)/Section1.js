import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="w-full h-[1000px] flex items-center justify-center overflow-hidden relative">
      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 -z-10" // Ensure it's behind everything
        src="/banner_copy.png"
        layout="fill"
        objectFit="cover"
        alt="background"
      />

      {/* Girl Image */}
      <div className="absolute left-1/4 bottom-0 z-10">
        {" "}
        {/* Ensure it's above the background */}
        <img src={"/girl.png"} width={520} height={824} alt="girl" />
      </div>

      {/* Text Content */}
      <div className="w-[864px] h-[690px] absolute right-[20%] bottom-[20%] flex flex-col gap-5 items-start justify-center  text-white z-10">
        <h2 className="text-[90px] font-montserrat font-extrabold">
          I LOVE<br></br> WHAT I DO
        </h2>
        <p className="font-mulish font-light text-[22px]">
          We create solutions that are bold and forward looking.
        </p>
        <a
          href="/"
          className="text-white bg-[#ff9a00] overflow-hidden relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
        >
          LEARN MORE
          <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 right-2 bg-white w-10 h-10">
            <img src="/dots-blue.png"></img>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Section1;
