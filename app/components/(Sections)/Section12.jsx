import React from "react";
import { GrSend } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Section12 = () => {
  return (
    <section className="w-full h-[609.6px] flex bg-blue-200 justify-center items-center">
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
              <span className="w-fit h-fit p-[10px] rounded-full border-[#999999] border-[1px]">
                <FaFacebook size={"16px"} color="#7b7b7b" />
              </span>
              <span className="w-fit h-fit p-[10px] rounded-full border-[#999999] border-[1px]">
                <FaTwitter size={"16px"} color="#7b7b7b" />
              </span>
              <span className="w-fit h-fit p-[10px] rounded-full border-[#999999] border-[1px]">
                <FaLinkedin size={"16px"} color="#7b7b7b" />
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
          <button className="px-[60px] py-[20px] rounded-full bg-white overflow-hidden text-black border-[1px] relative border-[#ff9a00]">
            <span className="absolute top-0 right-[6px] h-10 w-10 flex items-center justify-center rounded-full rounded-tl-none bg-[#ff9a00]">
              <GrSend color="white" size={"18px"} />
            </span>
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section12;
