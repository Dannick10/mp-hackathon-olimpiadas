"use client";

import React, { useState, useEffect } from "react";

import { getCountryData } from "../../services/olympics";
import { IconeBestGlobal } from "../../icons/icons";

const BestRankGlobal = () => {
  const [data, setData] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      Setloading(true);
      try {
        const result = await getCountryData('');
        setData(Object.values(result)[0]);
      } catch (error) {
        console.error(error);
      }
      Setloading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[40em]">
      {loading && <span className="loading loading-bars loading-lg text-blue-600"></span>}
      {data &&
        data.slice(0, 3).map((medal) => (
          <div
            className="stats shadow grid grid-cols-2 md:max-w-[50em] m-auto my-6"
            key={data.id}
          >
            <div className="stat flex flex-1 items-center">
              <div className="stat-figure text-secondary">
                <div className="avatar">
                      <span className="absolute right-0 -bottom-2">
                        <IconeBestGlobal position={medal.rank} />
                      </span>
                  <div className="w-16 rounded-full">
                    <img src={medal.flag_url} alt={medal.name} />
                  </div>
                </div>
              </div>
              <div className="stat-value">
                <p>{medal.rank}º</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="stat-title text-wrap">
                  <p>{medal.name}</p>
                </div>
                <div className="stat-desc text-secondary">
                  <p>{medal.total_medals} total medals</p>
                </div>
              </div>
              <div className="stat-figure text-primary hidden md:block">
                <p className="badge  badge-primary">{medal.continent}</p>
              </div>
            </div>

            <div className="stat">
              <div className="stat-title">Medals</div>
              <div className="flex gap-2 justify-between">
                <div className="flex flex-col justify-center items-center">
                  
                  <div className="stat-value text-[#FCBE1F]">
                    {medal.gold_medals}
                  </div>
                  <div className="stat-desc">
                    GOLD
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="stat-value text-[#99AAB5]">
                    {medal.silver_medals}
                  </div>
                  <div className="stat-desc">
                    SILVER
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                <div className="stat-value text-[#E64C3C]">
                  {medal.bronze_medals}
                </div>
                <div className="stat-desc">
                  BRONZE
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BestRankGlobal;
