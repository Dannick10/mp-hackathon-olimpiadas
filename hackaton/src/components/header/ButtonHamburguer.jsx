"use client";

import React, { useState } from "react";

const ButtonHamburguer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <label className="btn btn-circle bg-none border-none fill-none swap swap-rotat z-20 bg-blue-600 hover:bg-blue-500 md:hidden" onClick={toggle}>
        {!isDrawerOpen ? (
          <svg
            className="swap-off fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        ) : (
          <svg
            className="swap-rotate rotate-90 fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        )}
      </label>

      {isDrawerOpen && (
        <div
          className="absolute flex justify-center right-0 top-0 h-screen bg-base-100 border-l-2 border-l-base-200 p-2 w-80 cursor-auto"
          onClick={toggle}
        >
          <ul className="space-y-8 py-20 text-xl text-center font-semibold text-gray-800">
            <li className="hover:text-secondary cursor-pointer">
            world of the olympics
            </li>
            <li className="hover:text-secondary cursor-pointer">Competitions</li>
            <li className="hover:text-secondary cursor-pointer">
            Ratings
            </li>
            <li className="hover:text-secondary cursor-pointer">Athletes</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ButtonHamburguer;
