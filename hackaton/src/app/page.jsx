'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Disciplines from "../components/disciplines/disciplines";
import Events from "../components/events/events";



export default function Home() {


  return (
    <main className="h-full w-full">
      <Events />
    </main>
  );
}
