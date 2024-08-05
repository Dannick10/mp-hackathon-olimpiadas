"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Disciplines from "../components/disciplines/disciplines";
import Events from "../components/events/events";
import TitleComponent from "../components/Title/TitleComponent";

export default function Home() {
  return <main className="min-h-screen w-full">
    <TitleComponent title={'Competições de hoje'}>
     </TitleComponent>
    <div className="flex items-center justify-center">
     <Events />
    </div>
  </main>;
}
