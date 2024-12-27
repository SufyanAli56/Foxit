import React from "react";
import Star from "../../assets/star.png";
import Png from "../../assets/PNg.png";
import Vector1 from "../../assets/Vector 59.png";
import Vector2 from "../../assets/Vector 60.png";
import Vector3 from "../../assets/Vector 61.png";
import Vector4 from "../../assets/Vector 62.png";
import Vector5 from "../../assets/Vector 63.png";

const Testnomials2 = () => {
  return (
    <div className="bg-black py-10 relative overflow-hidden">
      {/* Title and Description Section */}
      <div className="flex flex-col justify-center items-center text-center mb-24">
        {/* Section Title */}
        <h1 className="font-bold text-pink-200 text-3xl sm:text-4xl mb-4">
          Отзывы
        </h1>

        {/* Description */}
        <p className="text-white text-lg sm:text-xl mb-6">
          <img src={Star} alt="Star Icon" className="inline-block w-6 h-6 mr-2" />
          Нажмите на белые кружочки
        </p>
      </div>

      {/* Vector Images */}
      <div>
        <img
          src={Vector1}
          alt="Vector 1"
          className="absolute w-30 h-20 top-60 left-10 ml-16 sm:left-20 hidden sm:block"
        />
        <img
          src={Vector2}
          alt="Vector 2"
          className="absolute w-30 h-20 top-50 mr-16 sm:right-16 hidden sm:block"
        />
        <img
          src={Vector3}
          alt="Vector 3"
          className="absolute w-30 h-20 bottom-10 ml-24 hidden sm:block"
        />
        <img
          src={Vector4}
          alt="Vector 4"
          className="absolute w-30 h-20 bottom-40 right-12 mr-24 hidden sm:block"
        />
        <img
          src={Vector5}
          alt="Vector 5"
          className="absolute w-30 h-20 top-3/2 mb-10 left-1/2 transform hidden sm:block"
        />
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10">
        <img src={Png} alt="Testimonial Image" className="mt-20 sm:w-auto sm:mt-20" />
      </div>
    </div>
  );
};

export default Testnomials2;
