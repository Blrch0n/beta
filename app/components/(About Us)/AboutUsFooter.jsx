import React from "react";

const AboutUsFooter = () => {
  return (
    <section className="w-full h-fit py-[50px] flex items-center bg-black justify-center border-t border-white">
      <div className="max-w-[1140px] w-full h-fit flex justify-between items-center">
        <p>
          Copyright © 2021<span>Portomega</span>design and developed by
          <span>Fox-Theme</span>
        </p>
        <div className="w-fit h-fit flex flex-row gap-4">
          <a>Home</a>
          <a>About us</a>
          <a>Contact us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUsFooter;
