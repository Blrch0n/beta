import React from "react";
// import { useRevealOnce } from "../(Main_structure)/useRevealOnce";

const Section1 = () => {
  return (
    <section
      className="w-full h-[1000px] flex items-center justify-center relative bg-no-repeat bg-cover max-[574px]:h-[525px]"
      style={{ backgroundImage: "url(/banner_copy.png" }}
    >
      <div className="relavite max-w-[1140px] w-full h-full relative justify-end flex ">
        <div className="absolute left-0 bottom-0 z-10 w-fit max-[576px]:invisible">
          <img src={"/girl.png"} width={520} height={824} alt="girl" />
        </div>
        <div className="w-fit h-full max-[992px]:w-full max-[992px]:items-center flex flex-col gap-5 items-start justify-center text-white z-10">
          <h2 className="text-[90px] font-montserrat font-extrabold max-[574px]:text-[45px] max-[574px]:text-center">
            I LOVE<br></br> WHAT I DO
          </h2>
          <p className="font-mulish font-light text-[22px] max-[574px]:text-[14px] max-[574px]:text-center">
            We create solutions that are bold and forward looking.
          </p>
          <a
            href="/"
            className="text-white bg-[#ff9a00] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
          >
            LEARN MORE
            <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 group-hover:top-[-40px] duration-300 right-2 bg-white w-10 h-10">
              <img src="/dots-blue.png"></img>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
