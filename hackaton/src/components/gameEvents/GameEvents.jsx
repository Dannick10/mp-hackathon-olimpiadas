import React from "react";
import Image from "next/image";
import { ArenaIcone, TenisIcone } from "../../icons/icons";

const GameEvents = ({ data }) => {
  console.log(data);

  return (
    <div className="relative">
      <Image
        src={`https://dummyimage.com/640x480/2A66B7/fff.png&text=${encodeURIComponent(
          data.discipline_name
        )}`}
        alt={`${data.discipline_name}`}
        width={1200}
        height={480}
      />
     
      <div className="bg-gradient-to-b to-black to-80% from-transparent w-full h-80 bottom-0 absolute flex flex-col-reverse">
        <div className=" text-white pb-4 p-2">
          <h2 className="font-bold">{data.detailed_event_name}</h2>
          <div className="flex items-center gap-2">
            <span><TenisIcone/></span>
            <p>{data.discipline_name}</p>
          </div>
          <div className="flex items-center gap-2">
            <span><ArenaIcone/></span>
            <p>{data.venue_name}</p>
          </div>
        </div>
     
      </div>
      
    </div>
  );
};

export default GameEvents;
