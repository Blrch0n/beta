import React from "react";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import Link from "next/link";

const sideBarItems_data = [
  {
    icon: <FaHome />,
    title: "Home",
    url: "/",
  },
  {
    icon: <FaInfoCircle />,
    title: "About Us",
    url: "/about-us",
  },
  {
    icon: <FaImages />,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    icon: <MdFindInPage />,
    title: "Pages",
    url: "/pages",
  },
  {
    icon: <FaBloggerB />,
    title: "Blog",
    url: "/blog",
  },
  {
    icon: <MdOutlineContactSupport />,
    title: "Contact Us",
    url: "/contact-us",
  },
];

const SideBarItems = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      {sideBarItems_data.map((data, index) => (
        <Link href={`/dashboard${data.url}`} key={index}>
          <div className="w-full h-fit flex flex-row gap-4 p-5 items-center bg-[#333] rounded-lg hover:bg-[#ff9a00] cursor-pointer">
            {data.icon}
            <p>{data.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBarItems;
