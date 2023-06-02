/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Organização",
      image: "/Image2.png",
    },
    {
      title: "Preparação",
      image: "/Image3.png",
    },
    {
      title: "Colaboração",
      image: "/Image4.png",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className="w-full relative max-w-[1240px] px-[16px] flex flex-col gap-5 items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-[16px]">
          <h2 className="text-[34px] text-[#63038C]">
            Conheça nossos serviços principais
          </h2>

          <p className="font-bold text-[16px] text-[#392528]">
            Com toda nossa preocupação com seu dia a dia pensamos cuidadosamente
            nos serviços principais para te ajudar!
          </p>
        </div>

        <div className="w-full p-[16px] pb-[50px] bg-white rounded-full flex items-center justify-center flex-col gap-5 overflow-hidden">
          <img
            src={carouselItems[currentSlide].image}
            alt={carouselItems[currentSlide].title}
            className="w-full"
          />

          <p className=" text-center text-[#333333] font-bold text-[24px]">
            {" "}
            {carouselItems[currentSlide].title}
          </p>
          <button className="text-[#63038C] font-bold">
            Conhecer mais &gt;
          </button>
        </div>
      </div>
      <div className="w-full absolute b">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2  hover:brightness-75 text-[#63038C] p-2 px-3.5 rounded-full"
          onClick={handlePrevSlide}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 hover:brightness-75 text-[#63038C] p-2 px-3.5 rounded-full"
          onClick={handleNextSlide}
        >
          &gt;
        </button>
      </div>

      <div className="w-full flex flex-col gap-5 items-center justify-center">
        <button className=" m-auto text-white font-bold bg-[#63038C] py-[14px] rounded-full">
          Quero ver mais
        </button>
      </div>
    </>
  );
};

export default Carousel;
