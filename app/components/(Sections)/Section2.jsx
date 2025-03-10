import { FaPhoneAlt } from "react-icons/fa";
const section2_data = [
  {
    title: "UI/UX DESIGN",
    color: "#ac5ce1",
  },
  {
    title: "WEB DEVELOPMENT",
    color: "#f40556",
  },
  {
    title: "SEO & MARKETING",
    color: "#79c7ee",
  },
  {
    title: "PHOTOGRAPHY",
    color: "#ff920a",
  },
];

const Section2 = () => {
  return (
    <section
      className="w-full min-h-[932px] h-fit flex items-center justify-center bg-white overflow-hidden relative]"
      style={{ backgroundImage: "url(/service_bg.jpg  )" }}
    >
      <div className="max-w-[1140px] w-full max-[992px]:flex-col max-[992px]:py-20 px-5 h-full flex flex-row items-center justify-between">
        <img
          src="/skill.png"
          className="max-w-[635px] max-h-[607px] w-full h-auto"
        ></img>
        <div className="max-w-[475px] w-full h-full flex flex-col items-start justify-center">
          <div className="w-full h-full flex flex-col gap-5 items-start justify-center">
            <h4 className="text-[#f783aa] text-lg font-bold font-montserrat">
              ABOUT US
            </h4>
            <h3 className="text-black font-montserrat text-[32px] font-extrabold">
              <span className="text-[#ff9a00]">we're protomega,</span>a small
              design agency based in Ios angeles.
            </h3>
            <p className="text-[#999999] font-mulish text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              href="/"
              className="text-white bg-[#ff9a00] overflow-hidden group relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
            >
              LEARN MORE
              <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 group-hover:top-[-40px] duration-300 right-2 bg-white w-10 h-10">
                <FaPhoneAlt size={"16px"} color={"#ff9a00"} />
              </span>
            </a>
            <div className="w-full h-fit grid grid-cols-2 grid-rows-2 gap-5 items-center justify-between">
              {section2_data.map((data, index) => (
                <div
                  className="text-black w-full h-fit text-[16px] font-montserrat gap-2 relative"
                  key={index}
                >
                  {data.title}
                  <span
                    className="w-[30px] h-[4px] rounded-full inline-block absolute left-0 -bottom-1"
                    style={{ backgroundColor: data.color }}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
