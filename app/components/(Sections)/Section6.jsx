import { FaCodeBranch } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoHelpBuoy } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";

const services = [
  {
    icon: (
      <FaCodeBranch
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "Development",
  },
  {
    icon: (
      <HiPaintBrush
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "Design",
  },
  {
    icon: (
      <IoIosPhonePortrait
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "Mobile Apps",
  },
  {
    icon: (
      <IoHelpBuoy
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "Support",
  },
  {
    icon: (
      <AiOutlineGlobal
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "SEO & Marketing",
  },
  {
    icon: (
      <IoMdTime
        className="text-[#b47beb] transition-colors duration-300 group-hover:text-white"
        size="32px"
      />
    ),
    title: "Time Management",
  },
];

const Section6 = ({ children }) => {
  return (
    <section
      className="w-full flex justify-center py-16"
      style={{ backgroundImage: "url(/service_bg.jpg)" }}
    >
      <div className="w-[1140px] max-[1200px]:px-20 flex flex-col items-start">
        <div className="mb-10">
          <h4 className="text-[#f783aa] text-lg font-bold font-montserrat">
            Our Services
          </h4>
          <h3 className="text-black text-[32px] font-montserrat font-bold">
            We love to find simple{" "}
            <span className="text-[#a762e9]" style={{ color: children }}>
              Solutions to <br /> complex challenges.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full h-fit max-[992px]:grid-cols-2 max-[768px]:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-[#999] border-2 relative overflow-hidden flex flex-col gap-3 rounded-xl p-8 bg-white shadow-md transition-transform hover:scale-105"
            >
              <div className="w-[60px] h-[60px] absolute cursor-pointer top-0 right-0 shadow-md bg-[#f7f7f7] rounded-full group-hover:bg-[#a762e9] duration-300 rounded-tr-none flex items-center justify-center">
                {service.icon}
              </div>
              <h4 className="text-[22px] font-montserrat font-semibold text-black">
                {service.title}
              </h4>
              <p className="text-base font-medium font-mulish text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
