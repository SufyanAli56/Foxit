import React, { useState } from "react";
import Box from '../../assets/Box1.png';
import Box2 from '../../assets/Box2.png';
import Box3 from '../../assets/Box3.png';
import Arrow from '../../assets/arrow spoiler.png';
import Vector from '../../assets/Vector 3.svg'
import Vector2 from '../../assets/Vector 4.png'

const Card = () => {
  // State to track the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <section 
      className="bg-black min-h-[600px] w-full p-10 md:p-20"
      aria-labelledby="services-title"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <h1 id="services-title" className="text-2xl font-bold ml-20 text-pink-200">
          Услуги
        </h1>
        <div>
          <p className="text-white text-sm leading-relaxed">
            Мы специализируемся на создании лендингов, многостраничных
            коммерческих <br/> сайтов, интернет-магазинов. Также возможно оказание
            отдельных дизайнерских <br/> услуг (от брендинга до презентаций) или
            отдельно услуг разработчика<br/> (верстка готового макета, анимации и так
            далее).
          </p>
        </div>
      </div>
      
      {/* Arrow Image that triggers the dropdown */}
      <div className="flex justify-center items-center mt-4">
        <img 
          src={Arrow} 
          alt="Arrow to toggle dropdown" 
          className="cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      
      {/* Dropdown Content */}
      {isOpen && (
        <div className="mt-4 p-6 rounded-lg flex flex-col gap-6">
          {/* First Section - List Items */}
          <div className="flex items-start">
            {/* Left side with the heading */}
            <div className="mr-10">
              <h2 className="text-red-500 text-xl font-bold">Дизайнерские услуги</h2>
              <img src={Vector2} alt="" className="w-20 h-40" />
              <img src={Vector} alt="" className="w-20 h-20 absolute mt-20" />
            </div>

            {/* Right side with the list of items */}
            <div className="text-left ml-auto">
              <ul className="text-white mt-4 list-disc list-inside">
                <li className="mb-2">Создание лендингов</li>
                <li className="mb-2">Разработка интернет-магазинов</li>
                <li className="mb-2">Дизайнерские услуги (брендинг, презентации)</li>
                <li className="mb-2">Анимации и верстка готовых макетов</li>
                <li className="mb-2">Поддержка и обслуживание сайтов</li>
              </ul>
            </div>
          </div>

          {/* Second Section - Paragraphs */}
          <div className="flex items-start">
            {/* Left side with the heading */}
            <div className="mr-10">
              <h2 className="text-red-500 text-xl font-bold">Разработка сайтов</h2>
            </div>

            {/* Right side with the list of items as paragraphs */}
            <div className="text-left ml-auto">
              <p className="text-white mt-4 mb-2">Интернет-магазины</p>
              <p className="text-white mt-4 mb-2">Многостраничные сайты</p>
              <p className="text-white mt-4 mb-2">Портфолио-сайты</p>
              <p className="text-white mt-4 mb-2">Корпоративные сайты</p>
            </div>
          </div>

          {/* Third Section - Paragraphs */}
          <div className="flex items-start">
            {/* Left side with the heading */}
            <div className="mr-10">
              <h2 className="text-pink-200 text-xl font-bold">Услуги разработчика</h2>
            </div>

            {/* Right side with the list of items as paragraphs */}
            <div className="text-left ml-auto">
              <p className="text-white mt-4 mb-2">Верстка макетов</p>
              <p className="text-white mt-4 mb-2">Анимации для сайтов</p>
              <p className="text-white mt-4 mb-2">Интеграции с API</p>
              <p className="text-white mt-4 mb-2">Оптимизация производительности</p>
            </div>
          </div>
        </div>
      )}

      {/* Cards Section */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
        <img 
          src={Box} 
          alt="Card design 1" 
          className="w-[480px] h-[540px]"
        />
        <img 
          src={Box2} 
          alt="Card design 2" 
          className="w-[480px] h-[540px]"
        />
        <img 
          src={Box3} 
          alt="Card design 3" 
          className="w-[480px] h-[540px]"
        />
      </div>
    </section>
  );
};

export default Card;
