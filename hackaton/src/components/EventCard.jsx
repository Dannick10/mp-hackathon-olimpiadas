import React from "react";
import CategoryDisciplinesCard from "./categoryDisciplines";
import Competitor from "./Competitor";

const EventCard = ({ date }) => {

  return (
    <div className="flex justify-between w-full text-gray-900 relative flex-wrap p-2 ">
      <div className="flex flex-col justify-between h-48 top-0 md:sticky">
        <h2 className="text-2xl">{date.detailed_event_name}</h2>
        <p>{date.event_name}</p>
        <CategoryDisciplinesCard
          discipline_name={date.discipline_name}
          discipline_pictogram={date.discipline_pictogram}
        />
        <p>Arena: {date.venue_name}</p>
      </div>

      <table className="p-3">
        <div className="w-full md:w-[40em]">
          <table className="w-full">
            {date.competitors.length > 0 && (
              <thead className="sticky top-20 rounded-2xl bg-white">
                <tr className="">
                  <th className="py-4">Posição</th>
                  <th colSpan={2} className="py-4">Times</th>
                  <th className="py-4">Competidor</th>
                </tr>
              </thead>
            )}
            <tbody>
              {date.competitors.map((competitor, index) => (
                <>
                  <Competitor key={index} date={competitor} />
                </>
              ))}
            </tbody>
          </table>
        </div>
      </table>
    </div>
  );
};

export default EventCard;
