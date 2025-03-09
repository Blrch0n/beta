"use clients";
import React from "react";
import SkillsSection from "../(Mini)/SkillSection";

const section2_data = [
  { label: "UI/UX DESIGN", percentage: 75 },
  { label: "WEB DEVELOPMENT", percentage: 90 },
  { label: "SEO & MARKETING", percentage: 65 },
  { label: "PHOTOGRAPHY", percentage: 80 },
];

const Section2 = () => {
  return (
    <section className="w-full h-fit flex py-[100px] px-[50px] items-center justify-center overflow-hidden">
      <div className="max-w-[1140px] flex flex-row w-full h-[600px] relative">
        <img
          src="./about-4-bg1.png"
          className="w-auto absolute h-[150%] bottom-[-300px] right-[-100px]"
        ></img>
        <div className="w-full h-full flex flex-col justify-between items-start">
          <div>
            <h3 className="text-[18px] font-bold font-montserrat text-[#f783aa]">
              ABOUT US
            </h3>
            <h2 className="text-[32px] font-montserrat font-black text-[#222]">
              <span className="text-[#ff9a00]">hello,</span> I' am Portomega &
              Ux/Ui Designer.
            </h2>
          </div>
          <p className="text-[16px] text-[#999] font-montserrat">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultricesn gravida.
          </p>
          <button className="text-white w-[183px] h-[58px] bg-[#ff9a00] rounded-[8px]">
            Contact Us
          </button>
          <hr className="bg-[#999] w-full h-[1px]"></hr>
          <div className="w-full h-fit ">
            <SkillsSection />
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center"></div>
      </div>
    </section>
  );
};

export default Section2;
