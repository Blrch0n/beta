import React from "react";

const Section4 = () => {
  return (
    <section className="w-full h-[403px] flex bg-slate-500 justify-center items-center ">
      <div className="w-[1140px] h-full flex flex-row justify-between items-center">
        <h2 className=" font-bold text-[32px] font-montserrat">
          we create successful digital<br></br> products
        </h2>
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

export default Section4;
