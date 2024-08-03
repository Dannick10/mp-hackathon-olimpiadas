'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Disciplines from "../components/disciplines/disciplines";



export default function Home() {


  return (
    <main className="h-full w-full">
       
      <Disciplines/>
      
    </main>
  );
}
