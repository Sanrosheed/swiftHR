import React from "react";
import Image from "next/image";

const Services = (props) => {
  return (
    <div className="flex flex-col py-8 border rounded-md bg-gradient-to-r from-gray-900 to-blue-600 text-white">
      <Image
        className="p-4 m-auto"
        src={props.img}
        width={300}
        height={300}
        alt="img"
      />
      <div className="px-4 text-center">
        <h2>{props.details}</h2>
      </div>
    </div>
  );
};

export default Services;
