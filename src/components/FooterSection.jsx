import React from 'react';
import logo from '../assets/White Logo.png';

const FooterSection = () => {
  return (
    <footer className="bg-violet-700 text-white p-12">
      <div className="md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0 md:w-1/2">
          <div className="flex items-center">
            <img src={logo} alt="AT Digital Logo" className="w-24" />
          </div>
          <p className="mt-5 max-w-md">
            Your goal is our target. Navigating intensive digital marketing
            projects and anything in between; We use online marketing platforms
            and tools to achieve a single objective: your Business results.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 mt-8 md:grid-cols-2 md:w-1/2">
          <div>
            <h3 className="text-lg font-medium">Our Technologies</h3>
            <ul className="mt-2">
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>Next.js</li>
              <li>GraphQL</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium">Our Services</h3>
            <ul className="mt-2">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing Solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex my-4 justify-center pt-8 md:pt-20">
        <hr className="border-white w-2/3" />
      </div>
      <div className="flex justify-center items-center">
        <button className="text-sm mx-4">Privacy Policy</button>
        <span className="mx-3">|</span>
        <button className="text-sm">Terms & Conditions</button>
      </div>
    </footer>
  );
};

export default FooterSection;
