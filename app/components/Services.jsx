import React from "react";
import ServicesCard from "./layouts/ServicesCard";
import HR1 from "../images/HR1.jpg";
import HR2 from "../images/HR2.jpg";
import HR4 from "../images/HR4.jpg";

const Services = () => {
  return (
    <div id="services">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row mt-6 gap-14 justify-around mx-14 md:mx-28 mb-20">
        <ServicesCard
          img={HR1}
          details="Attracting and sourcing potential candidates through various channels such as job boards, social media, and professional networks."
        />
        <ServicesCard
          img={HR2}
          details="Screening, interviewing, and assessing candidates to identify the best fit for the organization."
        />
        <ServicesCard
          img={HR4}
          details="Offering opportunities for employees to grow within the organization, including mentorship, leadership programs, or continued education."
        />
      </div>
    </div>
  );
};

export default Services;
