import React from "react";
const image_data = ["/image1.png", "/image2.png", "/image3.png"];

const Detail_section3 = () => {
  return (
    <section className="w-full h-fit flex items-center py-[100px] justify-center">
      <div className="max-w-[1140px] w-full flex flex-col gap-[50px]">
        <h1 className="text-center">Related Products</h1>
        <div className="w-full h-fit grid grid-cols-3 gap-5">
          {image_data.map((data, index) => (
            <div className="w-full h-auto" key={index}>
              <img src={data} alt="logo" className="w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Detail_section3;
