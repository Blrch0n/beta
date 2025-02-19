const section9_data = [
  { number: 256, label: "CREATIVE WORK" },
  { number: 137, label: "SATISFIED CLIENT" },
  { number: 206, label: "WORKING DAYS" },
  { number: 97, label: "CUP OF COFFEE" },
];

const Section9 = () => {
  return (
    <section className="w-full h-[324px] flex items-center justify-center">
      <div className="w-[1140px] h-fit flex flex-row justify-between items-center">
        {section9_data.map((data, index) => (
          <div
            key={index}
            className="w-full h-fit flex-col items-center flex justify-center"
          >
            <h2 className="text-[48px] font-extrabold font-montserrat text-[#f18f0a]">
              {data.number}
            </h2>
            <p className="font-semibold text-[16px] font-montserrat ">
              {data.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section9;
