import React from "react";
const section1_data = [
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
  "/image5.png",
];

const Section1_1 = () => {
  return (
    <section className="w-full h-fit bg-white flex justify-center items-center py-[100px]">
      <div className="max-w-[1140px] w-full h-fit grid grid-cols-2 grid-rows-3 gap-10">
        {section1_data.map((data, index) => (
          <div className="w-full h-full" key={index}>
            <img src={data} alt="logo" className="w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1_1;
