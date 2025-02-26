"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

// Dummy team members data
const teamMembers = [
  {
    name: "Shaharia Parvez",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Josifin Sense",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Shaharia Parvez",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Jane Smith",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Mike Tyson",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Emily Rose",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Chris Hemsworth",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "Scarlett Johansson",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
  {
    name: "John Doe",
    role: "UX/UI DESIGNER",
    image: "/testimonial2.jpg",
  },
];

export default function Section10() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Get current page's items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = teamMembers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section
      className="w-full h-fit pt-[100px] pb-[50px] bg-white"
      style={{ backgroundImage: "url(/background_none.png)" }}
    >
      <div className="w-[1140px] mx-auto">
        {/* Card Grid */}
        <div className="grid grid-cols-3 gap-1">
          {currentItems.map((member, index) => (
            <div
              key={index}
              className="group rounded-lg text-center w-full relative flex flex-col gap-6"
            >
              <div className="w-full h-fit border-[1px] group-hover:shadow-lg duration-300 p-5 rounded-[10px] border-[#999999]">
                <p className="text-[15px] text-[#999999] font-medium font-montserrat text-start">
                  Lorem ipsum dolor sit amet, amet,consectetur addipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
              <div className="w-full h-[130px] flex flex-row gap-4 items-center">
                <img
                  src={member.image}
                  className="w-0 h-0 rounded-full group-hover:w-[75px] group-hover:h-[75px] duration-1000"
                ></img>
                <div className="flex flex-col gap-2 text-[16px] font-montserrat font-bold text-start text-black">
                  <h6>{member.name}</h6>
                  <p className="text-[#a862e9]">{member.role}</p>
                </div>
              </div>
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
      ${currentPage === index + 1 ? "bg-[#a862e9]" : "bg-gray-300"}
    `}
              style={{ width: currentPage === index + 1 ? "30px" : "10px" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
