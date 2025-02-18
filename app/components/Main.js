import React from "react";
import Section1 from "./(Sections)/Section1";
import Section2 from "./(Sections)/Section2";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit w-full">
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Main;
