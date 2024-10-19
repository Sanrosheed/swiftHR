import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-blue-600 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">SwiftHR</h1>
          <p className="text-sm">
            We are a leading organization dedicated to helping businesses
            achieve their HR goals and find exceptional talents across all
            fields.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              About Us
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Our Services
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">
            Informations
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Careers
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Blog
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Help & FAQs
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              swiftHR@gmail.com
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              +234 777 888 999
            </a>
            <a
              className="hover:text-blue-500 transition-all cursor-pointer"
              href="/"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>

      <div>
        <p className="text-center py-4">
          @copyright developed by{" "}
          <span className="text-blue-500">Sanrosheed</span> | All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
