import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const image_data = ["/image1.png", "/image2.png", "/image3.png", "/image4.png"];
const labels = [
  { label: "CLIENT", index: false, paragraphy: "Shaharia Parvez" },
  { label: "CATEGORY", index: false, paragraphy: "Web Development" },
  { label: "DATE", index: false, paragraphy: "January 31,2021" },
  {
    label: "SHARE",
    index: true,
    paragraphy: [
      {
        icon: (
          <span className="w-[45px] h-[45px] rounded-full bg-[#7b7b7b] flex items-center justify-center">
            <FaFacebook />
          </span>
        ),
      },
      {
        icon: (
          <span className="w-[45px] h-[45px] rounded-full bg-[#7b7b7b] flex items-center justify-center">
            <FaTwitter />
          </span>
        ),
      },
      {
        icon: (
          <span className="w-[45px] h-[45px] rounded-full bg-[#7b7b7b] flex items-center justify-center">
            <FaLinkedin />
          </span>
        ),
      },
    ],
  },
];

const Detail_section1 = () => {
  return (
    <section className="w-full h-fit flex items-center justify-center py-[100px]">
      <div className="max-w-[1140px] w-full flex flex-col h-fit">
        <div className="w-full h-fit flex flex-row gap-[50px]">
          <div className="w-full h-[680px]">
            <img
              src="/image6.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-fit flex flex-col">
            <div className="w-full h-fit flex flex-col gap-5">
              <h1>Take a look around our portfolio.</h1>
              <p>Portfolio, Look, Life, Good</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
            <div className="w-full h-fit grid grid-cols-2 grid-rows-2 gap-5">
              {image_data.map((data, index) => (
                <div className="w-[255px] h-[157px]" key={index}>
                  <img src={data} alt="logo" className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] bg-[#999]"></hr>
        <div className="w-full h-fit grid grid-cols-4">
          {labels.map((data, index) => (
            <div
              key={index}
              className="w-full h-fit py-[30px] flex flex-col justify-center "
            >
              <h1>{data.label}</h1>
              <div className="w-full h-fit flex flex-row gap-4">
                {data.index ? (
                  data.paragraphy.map((data, index) => (
                    <div key={index}>{data.icon}</div>
                  ))
                ) : (
                  <p>{data.paragraphy}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail_section1;
