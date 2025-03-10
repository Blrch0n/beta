import React from "react";
const user_board_data = [
  {
    name: "№",
    size: "8%",
  },
  {
    name: "image",
    size: "20%",
  },
  {
    name: "background",
    size: "17%",
  },
  {
    name: "header",
    size: "20%",
  },
  {
    name: "paragraph",
    size: "20%",
  },
  {
    name: "button_label",
    size: "20%",
  },
];
const user_data = [
  {
    id: "1",
    image: "/",
    background: "",
    header: "I LOVE WHAT I DO",
    paragraph: "We create solutions that are bold and forward looking.",
    button_label: "Learn More",
  },
];

const Home_Section_1 = () => {
  return (
    <section className="w-full h-full p-10 flex flex-col">
      <div className="w-full h-full flex flex-col gap-10">
        <div className="w-full h-full flex items-start flex-col gap-5 ">
          <button className="bg-white p-3 rounded-[6px] text-black">
            Create Section1
          </button>
          <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
            <div className="w-full flex flex-row items-center h-fit p-5 bg-blue-200">
              {user_board_data.map((data, index) => (
                <div
                  key={index}
                  className="h-fit w-full"
                  style={{ width: data.size }}
                >
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
            <div className="w-full h-fit flex flex-col">
              {user_data.map((data, index) => (
                <div
                  className="w-full flex flex-row items-center h-fit p-5 bg-blue-200"
                  key={index}
                >
                  <div className="h-fit w-[8%] ">
                    <p>{data.id}</p>
                  </div>

                  <div className="h-fit w-[20%] ">
                    <p>{data.image}</p>
                  </div>
                  <div className="h-fit w-[17%] ">
                    <p>{data.background}</p>
                  </div>
                  <div className="h-fit w-[20%] ">
                    <p>{data.header}</p>
                  </div>
                  <div className="h-fit w-[20%] ">
                    <p>{data.paragraph}</p>
                  </div>
                  <div className="h-fit w-[20%] ">
                    <p>{data.button_label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Section_1;
