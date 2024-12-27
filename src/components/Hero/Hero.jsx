import React from "react";
import Arrow from "../../assets/arrow.png";
import Btn from '../../assets/btn.png'
const Hero = () => {
  return (
    <div className="h-screen mt-20 flex flex-col justify-center items-center text-center bg-black">
      <div className="px-4 md:px-0">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl">
          <span className="text-blue-600">Уникальн</span>
          <span className="text-blue-600">|</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-pink-100 mt-2 md:pl-36">
          вашего бренда через
        </h2>

        {/* Styled Text */}
        <div className="md:pl-44 mt-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl pl-44 ml-8 md:ml-0">
            <span className="text-white">&lt;</span>
            <span className="text-red-700">разработку</span>
            <span className="text-white">&gt;</span>{" "}
            <span className="text-red-700 ml-4 underline decoration-2 decoration-red-500">
              и дизайн
            </span>
          </h3>
        </div>
      </div>

      {/* Button */}
      <div className="mt-20">
        <button className="">
         <img src={Btn} alt="" />
        </button>
      </div>

      {/* Arrow Image */}
      <div className="flex justify-center items-center mt-14">
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
};

export default Hero;
