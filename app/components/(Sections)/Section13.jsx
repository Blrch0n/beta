import React from "react";
import { GrSend } from "react-icons/gr";
const Section13_data = [
  "Home",
  "About Us",
  "Portfolio",
  "Page",
  "Blog",
  "Contact Us",
];
const Section13 = () => {
  return (
    <section className="w-full p-[100px] h-[501px] flex justify-center items-center">
      <div className="w-[1140px] h-full flex flex-row justify-between">
        <div className="flex flex-col w-[445px] h-fit gap-5">
          <img src="./logo_4.png" className="w-[109px] h-[40px]"></img>
          <p className="text-[#999999]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a
          </p>

          <form className="relative w-full flex items-center">
            <input
              className="w-full px-6 py-4 rounded-full border border-gray-300 text-gray-600 outline-none focus:border-[#ff9a00]"
              type="text"
              placeholder="Your Email"
            />
            <button className="relative flex items-center justify-center px-16 py-4 ml-[-50px] overflow-hidden rounded-full bg-[#ff9a00] text-white font-semibold shadow-md border border-[#ff9a00]">
              SUBSCRIBE
              <span className="absolute right-1 -top-0 transform w-10 h-10 flex items-center justify-center bg-white rounded-full rounded-tl-none shadow">
                <GrSend color="#ff9a00" size={"18px"} />
              </span>
            </button>
          </form>
        </div>
        <div className="flex w-[475px] h-fit flex-col gap-5">
          <h2 className="text-[20px] font-montserrat font-semibold">
            Instagram Feeds
          </h2>
          <div className="w-full h-fit grid grid-cols-4 grid-rows-2 gap-[1px] rounded-xl overflow-hidden">
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image1.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image2.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image3.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image4.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image4.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image3.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image2.png"
              ></img>
            </div>
            <div className="w-full h-auto col-span-1 row-span-1 ">
              <img
                className="w-full h-full object-cover"
                src="./image1.png"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex w-[190px] flex-col gap-5">
          <h2 className="text-[20px] font-montserrat font-semibold">
            External Links
          </h2>
          <ul className="w-full h-fit flex flex-col gap-5 font-mulish text-[16px] text-[#999999] relative">
            {Section13_data.map((data, index) => {
              return (
                <li key={index} className="hover:text-white">
                  <a>{data}</a>
                </li>
              );
            })}
            <span className="absolute w-[1px] h-full bg-[#999999] top-0 left-0"></span>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section13;
