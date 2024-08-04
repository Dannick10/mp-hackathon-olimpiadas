import React, { useState, useEffect } from "react";
import Image from "next/image";

const Card = ({ imgLight,imgDark, name }) => {
  
  return (
    <>
      <div className="relative flex  items-center text-gray-700 bg-clip-border rounded-sm max-w-80 p-1 hover:bg-black hover:pl-4 hover:text-gray-200 transition-all cursor-pointer">
        <div className="text-center">
          <h4 className="font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 ">
            {name}
          </h4>
        </div>
        <div className="relative flex justify-end flex-1 overflow-hidden bg-clip-border rounded-xl">
          <Image width={50} height={50} src={imgDark}  alt="profile-picture" />
        </div>
      </div>
    </>
  );
};

export default Card;
