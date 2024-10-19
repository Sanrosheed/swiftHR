import React from "react";

const Services = () => {
  return (
    <div>
      <div>
        <div class="bg-gradient-to-r from-gray-900 to-blue-600 font-[sans-serif]">
          <div class="relative overflow-hidden">
            <div class="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
              <div class="relative z-10 text-center lg:text-left">
                <h1 class="text-4xl lg:mx-40 tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
                  Our
                  <br class="xl:hidden" />
                  <span class="text-indigo-400"> Services</span>
                </h1>
                <p class="max-w-md mx-auto text-lg text-gray-300 sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
                  Empowering businesses with tailored HR solutions. From
                  recruitment and talent management to employee engagement and
                  compliance, we provide comprehensive services to help you
                  build and nurture a thriving workforce.
                </p>

                <div class="mt-12 lg:mx-96 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
                  <div class="rounded-md shadow">
                    <button class="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                      Contact Us
                    </button>
                  </div>
                  <div>
                    <button class="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
