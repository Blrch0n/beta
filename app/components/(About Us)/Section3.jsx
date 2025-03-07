import React from "react";

const Section3 = () => {
  return (
    <section
      className="w-full h-fit flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url(/team-bg.jpg)" }}
    >
      <div className="max-w-[1140px] h-[400px] flex flex-col w-full">
        <div>
          <h2>TEAM</h2>
          <h1>
            <span>Our Team</span> Members
          </h1>
        </div>
        <div className="w-full h-fit"></div>
      </div>
    </section>
  );
};

export default Section3;
