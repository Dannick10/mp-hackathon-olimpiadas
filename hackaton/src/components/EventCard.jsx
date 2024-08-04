import React from "react";
import CategoryDisciplinesCard from "./categoryDisciplines";
import Competitor from "./Competitor";

const EventCard = ({ date }) => {
  console.log(date);

  return (
    <div className="flex justify-between w-full text-gray-900 relative flex-wrap">
      <div className="flex flex-col justify-between h-48 top-0 md:sticky" >
        <h2 className="text-2xl">{date.detailed_event_name}</h2>
        <p>{date.event_name}</p>
        <CategoryDisciplinesCard
          discipline_name={date.discipline_name}
          discipline_pictogram={date.discipline_pictogram}
        />
        <p>Arena: {date.venue_name}</p>
      </div>

      <table className="p-3">
        <div className=" bg-slate-100 w-[40em]">
          <table className="w-full">
            <tbody>
              {date.competitors.map((competitor, index) => (
                <Competitor key={index} date={competitor} />
              ))}
            </tbody>
          </table>
        </div>
      </table>
    </div>
  );
};

export default EventCard;
