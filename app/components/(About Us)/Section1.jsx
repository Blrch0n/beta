import React from "react";

const Section1 = () => {
  return (
    <section
      className="w-full h-fit flex justify-center  bg-cover bg-no-repeat"
      style={{ backgroundImage: "url(/about-banner.jpg)" }}
    >
      <div className="max-w-[1140px] w-full h-[390px] flex flex-col text-black justify-center items-center">
        <h2 className="text-[40px] font-montserrat font-bold">ABOUT US</h2>
        <span className="text-[16px] font-mulish font-semibold text-[#333]">
          <a href="/">Home </a>/ About me
        </span>
      </div>
    </section>
  );
};

export default Section1;
