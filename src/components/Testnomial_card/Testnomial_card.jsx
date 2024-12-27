import React from "react";
import Card from "../../assets/heart.png";
import Card2 from "../../assets/cifo.png";
import Card3 from "../../assets/card portf.png";
import Card4 from "../../assets/budlg.png";

const TestnomialCard = () => {
  return (
    <section className="bg-black w-full py-10">
      <div className="container mx-auto max-w-screen-lg px-6 md:px-12">
        {/* Section Title */}
        <h1 className="text-pink-200 font-bold text-2xl mb-6 ml-20 text-start">
          Портфолио
        </h1>
        {/* Card Container */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Individual Cards */}
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[640px]">
            <img
              src={Card}
              alt="Heart Project"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[640px]">
            <img
              src={Card2}
              alt="Cifo Project"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 h-[640px]">
            <img
              src={Card3}
              alt="Portfolio Card"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default TestnomialCard;
