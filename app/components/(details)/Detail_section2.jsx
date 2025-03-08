import React from "react";

const labels = [
  {
    header: "Precise information",
    paragraph: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    header: "Branding & modern design",
    paragraph: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    header: "Unique identity",
    paragraph: "Lorem Ipsum is simply dummy text of the printing",
  },
];

const Detail_section2 = () => {
  return (
    <section className="w-full h-fit flex items-center justify-center py-[100px]">
      <div className="max-w-[1140px] w-full flex flex-col h-fit">
        <div className="w-full h-fit flex flex-row gap-[50px]">
          <div className="w-full h-fit flex flex-col">
            <div className="w-full h-fit flex flex-col gap-5">
              <div>
                <h1>Client's problem :</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                </p>
              </div>
              <div>
                <h1>Client's problem :</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting,
                </p>
              </div>
              <div className="w-full h-fit flex flex-col gap-4 text-[16px]">
                {labels.map((label, index) => (
                  <div
                    key={index}
                    className="w-full h-fit flex flex-col relative gap-2 pl-[30px]"
                  >
                    <h1 className="">{label.header}</h1>
                    <p>{label.paragraph}</p>
                    <div className="absolute top-0 flex p-[4px] items-center justify-center left-0 w-[12px] h-[18px] rounded-full bg-[#ebebeb]">
                      <span className="w-full h-full  rounded-full bg-[#ff9a00]"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-fit grid grid-cols-2 grid-rows-2 gap-5"></div>
          </div>
          <div className="w-full h-[680px]">
            <img
              src="/image6.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail_section2;
