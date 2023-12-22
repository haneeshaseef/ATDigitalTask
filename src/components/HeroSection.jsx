import React from "react";
import hero_image from "../assets/Hero Section.png";

const HeroSection = () => {
  return (
    <div className="relative">
      <img src={hero_image} alt="Hero_Section_image" className="w-full" />
      <div className="bottom-16 left-16 lg:absolute lg:bottom-16 lg:left-16 lg:w-[630px]">
        <div className="p-8 bg-gradient-to-r from-green-500 to-cyan-500 bg-opacity-80 lg:rounded">
          <h1 className="text-white text-2xl font-bold mb-4">
            We Crush Your Competitors, Goals, And Sales Records - Without The
            B.S.
          </h1>
          <button className="px-6 py-2 text-white bg-orange-400 rounded">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
