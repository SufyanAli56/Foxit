import React, { useState } from "react";
import Logo from "../../assets/foxolt.png";
import Whatsapp from "../../assets/WhatsApp.png";
import Telegram from "../../assets/Telegram App.png";
import Viber from "../../assets/Viber.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-custom-bg w-full h-20 fixed top-0 left-0 z-10 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="w-30 h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-gray-300">Услуги</a>
          <a href="#" className="text-white hover:text-gray-300">О нас</a>
          <a href="#" className="text-white hover:text-gray-300">Портфолио</a>
          <a href="#" className="text-white hover:text-gray-300">Отзывы</a>
          <a href="#" className="text-white hover:text-gray-300">Контакты</a>
          <div className="flex flex-col space-y-2">
            <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
            <img src={Telegram} alt="Telegram" className="w-6 h-6" />
            <img src={Viber} alt="Viber" className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden text-white space-y-4 px-4 py-6 bg-custom-bg">
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-gray-400">Услуги</a></li>
            <li><a href="#" className="hover:text-gray-400">О нас</a></li>
            <li><a href="#" className="hover:text-gray-400">Портфолио</a></li>
            <li><a href="#" className="hover:text-gray-400">Отзывы</a></li>
            <li><a href="#" className="hover:text-gray-400">Контакты</a></li>
          </ul>
          <div className="flex justify-around items-center space-x-4 mt-2">
            <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
            <img src={Telegram} alt="Telegram" className="w-6 h-6" />
            <img src={Viber} alt="Viber" className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
