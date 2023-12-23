import React from "react";
import computer_image from "../assets/Computer Image.png";

const AppDevelopmentSection = () => {
  return (
    <div className="flex flex-col md:flex-row p-12">
      <img
        src={computer_image}
        alt="Computer_image"
        className="w-full h-auto max-w-md lg:ml-40 mx-auto md:w-1/2 mb-6 md:mb-0"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-purple-600 text-3xl font-bold mb-3 text-center md:text-left">
          Web & Mobile App Development
          </h2>
          <p className="mb-4 text-center md:text-left">
          Your web and mobile apps need all the power to grow your business.
            We use frameworks which enhance customer engagement methods to
            respond to different situations by your potentials customers who
            interact with your business online.
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

export default AppDevelopmentSection;
