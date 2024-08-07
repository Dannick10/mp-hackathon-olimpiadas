import React from "react";
import { IconeDate, ArenaIcone, TenisIcone } from "../../icons/icons";

const GamePage = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  console.log(data);
  const endDate = formatDate(data.end_date);

  return (
    <div className="card bg-base-200 image-full w-96 shadow-xl m-4">
      <figure>
        <Image
          src={data.discipline_pictogram}
          width={500}
          height={300}
          alt={data.discipline_name}
        />
      </figure>
      <div className="card-body flex justify-between">
        <h2 className="card-title">{data.detailed_event_name}</h2>
        <div className="badge">
          <p>{endDate}</p>
        </div>
        <div className="card-side flex flex-col justify-between items-center">
          <div className="card-actions flex items-center justify-between gap-2 w-full">
            <TenisIcone />
            <p>{data.discipline_name}</p>
          </div>
          <div className="card-actions flex items-center justify-between gap-2 w-full">
            <ArenaIcone />
            <p>{data.venue_name}</p>
            <p>{data.event_name}</p>
          </div>
        </div>
        <div className="max-h-[10em] overflow-y-auto">
          {data.competitors.map((competitors) => (
            <>
              <div className="flex my-1 justify-between p-2 glass bg-primary">
                <div className="avatar">
                  <div className="mask mask-squircle w-8">
                    <img src={competitors.country_flag_url} />
                  </div>
                </div>
                <div>{competitors.competitor_name}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
