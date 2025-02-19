import { BsThreeDots } from "react-icons/bs";

const Section11 = () => {
  return (
    <section className="w-full h-[681px] flex justify-center items-center">
      <div className="w-[1140px] h-full p-[100px] flex flex-col justify-between">
        <div>
          <h4>LATEST NEWS</h4>
          <h3>publish what you think</h3>
        </div>
        <div className="w-full h-fit flex justify-between  items-center gap-7">
          <div className="w-full h-[280px] flex flex-col relative overflow-hidden rounded-[15px] items-start justify-between">
            <img src="./blog1.jpg" className="w-full "></img>
            <div className="absolute flex flex-col bottom-0 p-[25px] text-black right-0 w-full h-[220px] rounded-[15px] bg-white">
              <div className="flex flex-row justify-between">
                <a>14 January 2021</a>
                <a>By Md.Shaharai</a>
              </div>
              <a className="font-bold text-[20px] ">
                I like the body. I like to design everything to do
              </a>
              <BsThreeDots size={"20px"} height={"20px"} color="black" />
              <p className="text-[16px] font-medium font-mulish text-[#999]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
          </div>
          <div className="w-full h-[250px] flex flex-col relative overflow-hidden rounded-[15px] items-start justify-between">
            <img src="./blog1.jpg" className="w-full "></img>
            <div className="absolute bottom-0 right-0 w-full h-[130px] rounded-[15px] bg-white"></div>
          </div>
          <div className="w-full h-[250px] flex flex-col relative overflow-hidden rounded-[15px] items-start justify-between">
            <img src="./blog1.jpg" className="w-full "></img>
            <div className="absolute bottom-0 right-0 w-full h-[130px] rounded-[15px] bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
