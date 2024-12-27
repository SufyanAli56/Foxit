import React from "react";
import Vector from "../../assets/Vector.png";
import Vector2 from "../../assets/Vector 60@2x.png";
import Vector3 from "../../assets/круг.png";

const Hero2 = () => {
  return (
    <section
      className="bg-black w-full min-h-[400px] flex items-center justify-center p-6"
      aria-labelledby="unique-designs"
    >
      <div className="container mx-auto max-w-screen-lg px-6  md:px-2 flex flex-col md:flex-row gap-18">
        {/* Left Content */}
        <div className="max-w-4xl flex-1">
          <h2
            id="unique-designs"
            className="text-xl font-bold text-pink-200 mb-4"
          >
            Уникальные дизайны и гибкая разработка
          </h2>
          <p className="text-white text-sm leading-relaxed">
            Наши дизайны для каждого проекта
            <span className="relative inline-block mx-2">
              {/* Image */}
              <img
                src={Vector}
                alt="Декоративный элемент"
                className="w-[100px] h-[40px] object-contain"
              />
              {/* Text Overlay */}
              <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-bold">
                уникальны
              </span>
            </span>
            , т.к. мы НЕ используем шаблоны. Разработка происходит на HTML, CSS,
            и JS, что
            <span className="w-40 h-10 bg-red-500 rounded-full text-white px-4 inline-flex items-center justify-center mx-2">
              позволяет
            </span>
            выполнять любые задачи, редактировать сайт по своему усмотрению с
            другими разработчиками либо подключить любую CMS систему.
            <span className="block ">
              <img
                src={Vector2}
                alt="Декоративный элемент"
                className="w-[200px] h-[20px] object-contain opacity-80"
              />
            </span>
          </p>
          <p className="text-white text-sm leading-relaxed mt-4">
            После разработки и проверки сайта мы исправим 
            <span className="text-red-500">любые недостатки втечение трёх недель бесплатно.</span>
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center ml-12">
          <img
            src={Vector3}
            alt="Декоративный элемент"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
