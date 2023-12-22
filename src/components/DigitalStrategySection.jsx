import React from "react";
import Search_icon_image from "../assets/Search Icon.png";

const DigitalStrategySection = () => {
  return (
    <div className="flex flex-col md:flex-row p-12">
      <img
        src={Search_icon_image}
        alt="Magnifying glass with check mark"
        className="order-first md:order-last w-full h-auto max-w-md mx-auto md:w-1/2 mb-6 md:mb-0"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-purple-600 text-3xl font-bold mb-3 text-center md:text-left">
            Digital Strategy Consulting
          </h2>
          <p className="mb-4 text-center md:text-left">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <div className="flex flex-col items-center justify-center">
            <button className="bg-orange-400 text-white px-4 py-2 rounded self-center md:self-start">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategySection;
