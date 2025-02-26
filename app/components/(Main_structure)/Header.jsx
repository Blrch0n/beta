import Image from "next/image";
import React from "react";
const Navbar_data = [
  "Home",
  "About Us",
  "Portfolio",
  "Page",
  "Blog",
  "Contact Us",
];

const Header = () => {
  return (
    <section className="flex items-center justify-center w-full h-fit bg-white">
      <div className="w-[1140px] h-fit bg-transparent fixed top-0 z-50">
        <div className="w-full h-full py-[30px] flex justify-between px-[15px]">
          <Image
            src="/logo_4.png"
            width={118}
            height={49}
            alt="logo"
            className=" cursor-pointer"
            href="/123"
          />
          <div className="w-fit h-full items-center justify-between">
            <ul className="flex  flex-row justify-between items-center">
              {Navbar_data.map((item, index) => (
                <li
                  href={`/${item}`}
                  className="px-[20px] py-3 cursor-pointer text-red-950"
                  key={index}
                >
                  {item}
                </li>
              ))}
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-white border rounded-full">
                <Image
                  className="cursor-pointer"
                  src="/shopping-bag.svg"
                  width={22}
                  height={22}
                  alt="logo"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
