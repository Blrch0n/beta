"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

// Dummy team members data
const teamMembers = [
  {
    name: "Shaharia Parvez",
    role: "UX/UI DESIGNER",
    image: "/member-1.png",
  },
  {
    name: "Josifin Sense",
    role: "UX/UI DESIGNER",
    image: "/member-2.png",
  },
  {
    name: "Shaharia Parvez",
    role: "UX/UI DESIGNER",
    image: "/member-3.png",
  },
  {
    name: "Jane Smith",
    role: "UX/UI DESIGNER",
    image: "/member-1.png",
  },
  {
    name: "Mike Tyson",
    role: "UX/UI DESIGNER",
    image: "/member-2.png",
  },
  {
    name: "Emily Rose",
    role: "UX/UI DESIGNER",
    image: "/member-3.png",
  },
  {
    name: "Chris Hemsworth",
    role: "UX/UI DESIGNER",
    image: "/member-1.png",
  },
  {
    name: "Scarlett Johansson",
    role: "UX/UI DESIGNER",
    image: "/member-2.png",
  },
  {
    name: "John Doe",
    role: "UX/UI DESIGNER",
    image: "/member-3.png",
  },
];

export default function TeamGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Get current page's items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = teamMembers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      className="w-full h-fit pt-[100px] pb-[50px]"
      style={{ backgroundImage: "url(/shape.jpg)" }}
    >
      <div className="w-[1140px] mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-3 gap-6">
          {currentItems.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg hover:shadow-lg duration-1000 border-[1px] border-[#f3f3f3] overflow-hidden text-start p-5 w-full relative"
            >
              <div className="absolute top-0 right-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-auto h-full object-cover"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-lg">{member.name}</h3>
              <p className="text-orange-500 font-semibold">{member.role}</p>
              <div className="flex space-x-3 mt-2 text-gray-500">
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-slate-200">
                  <FaFacebookF className="hover:text-orange-500 cursor-pointer duration-300" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-slate-200">
                  <FaTwitter className="hover:text-orange-500 cursor-pointer duration-300" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-full bg-slate-200">
                  <FaLinkedin className="hover:text-orange-500 cursor-pointer duration-300" />
                </div>
              </div>
              <p className="text-[#999999] font-mulish font-medium text-sm mt-3">
                Lorem ipsum dolor sit<br></br> amet, consectetur<br></br>{" "}
                adipiscing elit, sed do.
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`
       h-[5px] mx-2 rounded-full duration-200
      ${currentPage === index + 1 ? "bg-orange-500" : "bg-gray-300"}
    `}
              style={{ width: currentPage === index + 1 ? "30px" : "10px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
