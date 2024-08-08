"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCountryData } from "../../services/olympics";
import { IconeBestGlobal } from "../../icons/icons";

const BestRankGlobal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getCountryData('');
        setData(Object.values(result)[0]);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-4 min-h-[20em]">
      {loading && <span className="loading loading-bars loading-lg text-blue-600"></span>}
      {data.length > 0 && (
        <div className="w-full overflow-x-auto">
          <table className="table w-full min-w-max">
            <thead>
              <tr>
                <th></th>
                <th>Country</th>
                <th>Rank</th>
                <th>Total Medals</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th className="hidden md:table-cell">Continent</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 3).map((medal) => (
                <tr key={medal.id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 relative">
                        <Image
                          src={medal.flag_url}
                          width={500}
                          height={300}
                          alt={medal.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute right-0 -bottom-2">
                          <IconeBestGlobal position={medal.rank} />
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{medal.name}</div>
                        <div className="text-sm opacity-50 hidden md:block">{medal.country}</div>
                      </div>
                    </div>
                  </td>
                  <td>{medal.rank}º</td>
                  <td className="">{medal.total_medals}</td>
                  <td className="text-primary">{medal.gold_medals}</td>
                  <td className="text-primary">{medal.silver_medals}</td>
                  <td className="text-primary">{medal.bronze_medals}</td>
                  <td className="hidden md:table-cell">{medal.continent}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Country</th>
                <th>Rank</th>
                <th>Total Medals</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th className="hidden md:table-cell">Continent</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default BestRankGlobal;
