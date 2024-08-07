"use client";

import Disciplines from "../components/disciplines/disciplines";
import Events from "../components/events/events";
import TitleComponent from "../components/Title/TitleComponent";
import { IconeCompetition, IconeMedal } from "../icons/icons";
import GetMedals from "../components/medal/getMedal";
import Competitor from "../components/competitor/Competitor";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <section>
        <TitleComponent title={"Competitions now"}>
          <div className="flex absolute top-5 right-0">
            <IconeCompetition />
      
          </div>
        </TitleComponent>
        <div className="flex flex-col items-center justify-center">
          <Events />
        </div>
      </section>

      <section>
        <TitleComponent title={"TOP MEDALS"}>
          <div className="flex absolute right-0">
            <IconeMedal color={"#FCBE1F"} />
            <IconeMedal color={"#66757F"} />
            <IconeMedal color={"#E64C3C"} />
          </div>
        </TitleComponent>

      <GetMedals />
  
      </section>

      <section>
        <TitleComponent title={"Games"}>

        </TitleComponent>
          <Competitor />
          <Disciplines />
      </section>
    </main>
  );
}
