import React, { useState } from "react";
import Rec from "../../assets/Rectangle 35.png";
import Btn from "../../assets/btn.png";

const Footer = () => {
  // Add state for checkbox
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="bg-black w-full py-8 h-auto">
      {/* Header Section */}
      <div className="flex flex-col gap-6 md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-pink-200 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Контакты
          </h1>
        </div>
        <div className="text-center md:text-left ml-0 md:ml-20">
          <p className="text-xl text-pink-200 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Оставьте заявку, остальное сделаем мы!
          </p>
        </div>
      </div>

      {/* Phone numbers */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-8 md:space-y-0 md:space-x-8">
        <p className="text-red-600 font-semibold text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          +375 (29) 918-12-54
        </p>
        <p className="text-red-600 font-semibold text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          +375 (29) 909-04-14
        </p>
      </div>

      {/* Rectangle Image Section */}
      <div className="relative flex justify-center mt-8 px-4 sm:px-6 md:px-8">
        {/* Rectangle Image with responsive height */}
        <img
          src={Rec}
          alt="Rectangle"
          className="max-w-full h-auto sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[500px]"
        />

        {/* Text and Lines inside the Rectangle (visible on medium and larger screens) */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-pink-200 px-4 sm:px-6 md:px-8 hidden sm:block">
          {/* First text */}
          <p className="text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
            Ваше имя введённое состояние и ввода
          </p>

          <hr className="border-t-2 border-pink-200 mb-4 w-72 sm:w-64 mx-auto" />
          
          {/* Second text */}
          <p className="text-lg sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
            Ваше имя введённое состояние и ввода
          </p>

          <hr className="border-t-2 border-pink-200 mb-4 w-72 sm:w-64 mx-auto" />

          {/* Checkbox (visible on medium and larger screens) */}
          <div className="flex justify-center items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              checked={checked}
              onChange={handleCheckboxChange}
              className="mr-2 w-5 h-5 accent-green-500"
            />
            <label
              htmlFor="agree"
              className="text-white text-sm sm:text-xs md:text-base lg:text-lg xl:text-xl"
            >
              I agree to the terms and conditions
            </label>
          </div>
        </div>

        {/* Button Image with reduced size */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto">
          <img
            src={Btn}
            alt="Button"
            className="w-full h-auto"
          />
        </div>

        {/* Checkbox and Button for small screens */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center sm:block md:hidden">
          {/* Checkbox */}
          <div className="flex justify-center items-center mb-4">
            <input
              type="checkbox"
              id="agree-small"
              checked={checked}
              onChange={handleCheckboxChange}
              className="mr-2 w-5 h-5 accent-green-500"
            />
            <label
              htmlFor="agree-small"
              className="text-white text-sm sm:text-xs md:text-base lg:text-lg xl:text-xl"
            >
              I agree to the terms and conditions
            </label>
          </div>

          {/* Button */}
          <img
            src={Btn}
            alt="Button"
            className="w-36 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-auto"
          />
        </div>
      </div>

      {/* Footer Copyright */}
      <p className="text-pink-200 text-center text-sm mt-14 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        © 2024 Designed and Developed by Foxolt Studio
      </p>
    </div>
  );
};

export default Footer;
