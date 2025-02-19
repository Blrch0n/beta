const section7_data = [
  "Beautiful and easy to understand UI, professional animations",
  "Theme advantages are pixel perfect design & clear code delivered",
  "Present your services with flexible, convenient and multipurpose",
  "Unlimited power and customization possibilities",
];

const Section7 = () => {
  return (
    <div className="w-full h-[771px] p-[100px] bg-red-500 flex justify-center align-center">
      <div className="w-[1140px] h-full flex flex-row gap-[30px] ">
        <img src="/pc.png" className="w-[540px] h-[391px]"></img>
        <div className="w-full h-full flex flex-col gap-8">
          <h3 className="text-[32px] font-montserrat font-extrabold">
            Unique,truly
            <span className="text-[#ff9a00]"> responsive and functiona </span>
            websites
          </h3>
          <p className="text-[16px] font-mulish font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="w-full h-fit flex flex-col gap-3">
            {section7_data.map((item, index) => (
              <div key={index} className="relative ml-3">
                <span className="absolute -bottom-2 right-0 w-full h-[2px] bg-black"></span>
                <p className="text-[15px] text-white font-mulish font-semibold">
                  {item}
                </p>
                <span className="absolute top-2 -left-3 h-2 w-1 bg-[#ff9a00]"></span>
              </div>
            ))}
          </div>
          <a
            href="/"
            className="text-white bg-[#ff9a00] overflow-hidden relative w-fit h-fit py-[20px] rounded-full px-[60px] mt-2 "
          >
            LEARN MORE
            <span className=" rounded-full flex items-center justify-center rounded-tl-none absolute top-0 right-2 bg-white w-10 h-10">
              <img src="/dots-blue.png"></img>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section7;
