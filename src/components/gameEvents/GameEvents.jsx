import React from "react";
import { ArenaIcone, IconeDate, TenisIcone } from "../../icons/icons";

const GameEvents = ({ data }) => {
  return (
    <div
      className="relative h-[28em]"
      style={{
        backgroundImage: `url(${data.discipline_pictogram})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-b to-black to-80% from-transparent w-full h-full bottom-0 absolute flex flex-col-reverse">
        <div className="flex items-center gap-2 justify-center absolute top-0 left-0 p-2 bg-white text-gray-800 font-semibold rounded-e-md">
          <span>
            <IconeDate />
          </span>
          <p>{data.day}</p>
        </div>
        <div className=" text-white pb-4 p-2 absolute">
          <h2 className="font-bold">{data.detailed_event_name}</h2>
          <div className="flex items-center gap-2">
            <span>
              <TenisIcone />
            </span>
            <p>{data.discipline_name}</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <ArenaIcone />
            </span>
            <p>{data.venue_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameEvents;
