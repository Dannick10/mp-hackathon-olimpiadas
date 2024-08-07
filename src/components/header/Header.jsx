"use client";

import React from "react";
import ButtonHamburguer from "./ButtonHamburguer";
import { LogoOlympic } from "../../icons/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeController from "../themeController";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="navbar bg-base-100 px-8 shadow-md fixed top-0 z-40">
      <div className="flex-1">
        <span>
          <LogoOlympic />
        </span>
      </div>
      <div className="flex-none">
        <ButtonHamburguer />
      </div>
      <ul
        className={
          "hidden md:flex gap-8  justify-around  text-xm text-center font-semibold "
        }
      >
        <ThemeController />
        <Link href={"/"}>
          <li className={`hover:text-blue-600 cursor-pointer text-primary`}>
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li className={`hover:text-blue-600 cursor-pointer text-primary`}>
            About
          </li>
        </Link>
        <Link href={"/events"}>
          <li className="hover:text-blue-600 cursor-pointer text-primary">
            Events
          </li>
        </Link>
        <Link href={"/medals"}>
          <li className="hover:text-blue-600 cursor-pointer text-primary">
            Medals
          </li>
        </Link>
        <Link href={"https://docs.apis.codante.io/"} target="_blank">
          <li className="hover:text-blue-600 cursor-pointer text-primary">
            APICODANTE
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
