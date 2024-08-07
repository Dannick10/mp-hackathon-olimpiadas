import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imgLight, imgDark, name, index, id }) => {
  return (
    <>
      <Link href={`/events/${id}`}>
        <div
          className={`card glass ${
            index % 2
              ? "bg-blue-600"
              : index % 3
              ? "bg-green-600"
              : "bg-red-600"
          } w-80 transition-colors md:flex-row md:w-[40em] cursor-pointer hover:brightness-105`}
        >
          <figure>
            <img src={imgDark} alt="car!" />
          </figure>
          <div className="card-body flex-col items-center justify-between">
            <h2 className="card-title text-base-100 flex-1">{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
