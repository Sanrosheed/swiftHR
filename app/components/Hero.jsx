import React from "react";
import Image from "next/image";
// import HRpic from "../../app/images/HR pic.jpg";

const Hero = () => {
  return (
    <div>
      <div class="bg-[url('https://cdn.hashnode.com/res/hashnode/image/upload/v1729338239385/f6bd1fce-bfad-451f-8203-336f5c1b060e.jpeg')] object object-cover bg-cover bg-no-repeat font-[sans-serif] h-screen">
        <div class="relative overflow-hidden">
          <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
            <div class="relative z-10 mt-16 text-center lg:text-left">
              <h1 class="text-4xl lg:mx-40 tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
                Welcome to
                <br class="xl:hidden" />
                <span class="text-indigo-400"> Swift HR</span>
              </h1>
              <p class="max-w-md mx-auto text-center text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
                We are a leading organization dedicated to helping businesses
                achieve their HR goals and find exceptional talents across all
                fields.
              </p>

              <div class="mt-12 lg:ml-96 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                <div class="rounded-md shadow">
                  <button class="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                    Contact Us
                  </button>
                </div>
                <div>
                  <button class="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
