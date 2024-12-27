import React from 'react';

const Slide = () => {
  return (
    <div className="w-full h-12 bg-red-700 overflow-hidden">
      <div className="flex flex-row text-black gap-20 p-2 animate-slide">
        <span>БЭМ-методологи</span>
        <span>CSS</span>
        <span>HTML</span>
        <span>Java</span>
        <span>JS</span>
        <span>PHP</span>
        <span>REACT</span>
        <span>Палитра</span>
        <span>Композиция</span>
        <span>UI/UX</span>
        <span>Graphic</span>
      </div>
    </div>
  );
};

export default Slide;
