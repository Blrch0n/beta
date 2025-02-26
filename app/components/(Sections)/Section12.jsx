import React from "react";
import { GrSend } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Section12 = () => {
  return (
    <section className="w-full h-[609.6px] flex overflow-hidden justify-center relative items-center">
      <span className="absolute top-0 left-0 w-[40%] h-full -z-[10]">
        <img
          src="/image_form.jpg"
          className="w-full h-full object-cover"
          alt="background"
        ></img>
      </span>
      <div className="w-[1140px] h-fit flex flex-row">
        <div className="flex flex-col gap-5 w-[517px] h-fit">
          <div className="flex flex-col gap-[10px] items-start">
            <h3 className="text-[24px] font-bold font-montserrat text-black">
              Address:
            </h3>
            <p className="text-[16px] font-medium font-mulish text-[#999999]">
              29 North Redwood Court,Wantagh,<br></br> NY 11793
            </p>
          </div>
          <div className="flex flex-col gap-[10px] items-start">
            <h3 className="text-[24px] font-bold font-montserrat text-black">
              Information:
            </h3>
            <p className="text-[16px] font-medium font-mulish text-[#999999]">
              info@portomega.com <br></br> (714)893-3884
            </p>
          </div>
          <div className="flex h-fit w-full flex-col gap-[10px] items-start">
            <h3 className="text-[24px] font-bold font-montserrat text-black">
              Follows:
            </h3>
            <div className="flex flex-row gap-5">
              <span className="w-fit h-fit p-[10px] group cursor-pointer rounded-full border-[#999999] border-[1px]">
                <FaFacebook className="text-[#7b7b7b] text-[16px] group-hover:text-[#ff9607]" />
              </span>
              <span className="w-fit h-fit p-[10px] group cursor-pointer rounded-full border-[#999999] border-[1px]">
                <FaTwitter className="text-[#7b7b7b] text-[16px] group-hover:text-[#ff9607]" />
              </span>
              <span className="w-fit h-fit p-[10px] group cursor-pointer rounded-full border-[#999999] border-[1px]">
                <FaLinkedin className="text-[#7b7b7b] text-[16px] group-hover:text-[#ff9607]" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full gap-8 flex flex-row h-fit">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-6 rounded-full"
            ></input>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full p-6 rounded-full"
            ></input>
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-5 h-[211px] rounded-[10px]"
          ></textarea>
          <button className="group px-[60px] py-[20px] rounded-full bg-white overflow-hidden text-black border-[1px] relative border-[#ff9a00]">
            <span className="absolute top-0 right-[6px] h-10 w-10 flex items-center group-hover:translate-y-[-40px] duration-200 justify-center rounded-full rounded-tl-none bg-[#ff9a00]">
              <GrSend color="white" size={"18px"} />
            </span>
            SUBMIT
          </button>
        </div>
      </div>
      <span className="absolute top-0 right-0 w-[60%] h-full -z-10">
        <img
          src="/round_1.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </span>
    </section>
  );
};

export default Section12;
