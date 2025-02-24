"use client";
import React, { useEffect, useState } from "react";

const CardNavigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 2,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 3,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 4,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 5,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 6,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 7,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 8,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
    {
      id: 9,
      header: "Shaharia Parvez",
      job: "UX/UI Designer",
      fb_url: "/",
      twitter_url: "/",
      linkedin_url: "/",
      paragraph:
        "Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do",
      image: "/member-1.png",
    },
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const visibleCards = cards.slice(
    currentIndex * cardsPerPage,
    (currentIndex + 1) * cardsPerPage
  );

  return (
    <div className="flex w-[1140px] h-full flex-col items-center justify-center p-4">
      {/* Cards Container */}
      <div className="w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="flex-shrink-0 w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-md border flex justify-between border-gray-200 text-center">
                <div className="flex w-full h-full bg-red-50"></div>
                <img src="/member-1.png"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 space-x-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === totalPages - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};
const Section8 = () => {
  return (
    <div
      className="h-[472px] w-full bg-gray-100 flex flex-col items-center justify-center p-4 bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/shape.jpg") ' }}
    >
      <CardNavigation />
    </div>
  );
};
export default Section8;
