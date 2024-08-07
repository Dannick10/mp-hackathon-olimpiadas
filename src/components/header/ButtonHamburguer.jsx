"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeController from "../themeController";

const ButtonHamburguer = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggle = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <div className="px-2 md:hidden">
        <ThemeController />
      </div>
      <label
        className="btn btn-circle bg-none border-none fill-none swap swap-rotat z-20 bg-blue-600 hover:bg-blue-500 md:hidden"
        onClick={toggle}
      >
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
          <ul className="py-20 text-xm text-center font-semibold text-gray-800">
            <Link href={"/"}>
              <li
                className={`hover:text-blue-600 cursor-pointer text-primary my-8`}
              >
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className={`hover:text-blue-600 cursor-pointer text-primary`}>
                About
              </li>
            </Link>
            <Link href={"/events"}>
              <li className="hover:text-blue-600 cursor-pointer my-8 text-primary">
                Events
              </li>
            </Link>
            <Link href={"/medals"}>
              <li className="hover:text-blue-600 cursor-pointer my-8 text-primary">
                Medals
              </li>
            </Link>
            <Link href={"https://docs.apis.codante.io/"} target="_blank">
              <li className="hover:text-blue-600 cursor-pointer my-8 text-primary">
                APICODANTE
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default ButtonHamburguer;
