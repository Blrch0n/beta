import React from "react";
import { BsThreeDots } from "react-icons/bs";

const news_data = [
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharia",
    header: "I like the body.I like to design everthing to do",
    icon: <BsThreeDots size={20} />,
  },
];

const Section1_2 = () => {
  return (
    <section className="w-full h-fit flex items-center justify-center py-[100px] bg-white">
      <div className="max-w-[1140px] w-full h-fit grid grid-cols-3 gap-[50px]">
        {news_data.map((data, index) => (
          <div
            className="max-w-[350px] min-h-[350px] w-full relative h-full rounded-xl overflow-hidden shadow-md"
            key={index}
          >
            <div className="w-full h-auto">
              <img
                src="/blog1.jpg"
                alt="blog"
                className="w-full h-auto object-cover"
              />
              <div className="w-full h-fit flex flex-col gap-2 p-[30px] absolute bottom-0 right-0   bg-white rounded-[15px]">
                <span>
                  <p>{data.date}</p>
                  <h2>{data.author}</h2>
                </span>
                <h1>{data.header}</h1>
                <div>{data.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1_2;
