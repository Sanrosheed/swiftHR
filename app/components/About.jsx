import React from "react";

const About = () => {
  return (
    <div
      id="about-us"
      className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor"
    >
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img
            className="rounded-lg"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1729330650987/dbf6cd3b-7bae-4709-8d1a-a88d2bf26550.jpeg"
            alt="img"
          />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our organization Special?
          </h2>
          <p>
            We are a leading organization dedicated to helping businesses
            achieve their HR goals and find exceptional talents across all
            fields. We have a track record of excellence and reliability as we
            have offered services to a variety of high tech companies such as
            Gooogle, Amazon, Facebook and others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
