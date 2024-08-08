"use client";

import React, { useState, useEffect } from "react";
import { getCountryData } from "../../services/olympics";
import { IconeBestGlobal, Arrow } from "../../icons/icons";
import Image from "next/image";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getCountryData(`?page=${page}`);
        setData(Object.values(result)[0]);
        const pagination = Object.values(result)[2] || {};
        setTotalPages(pagination.last_page || 1);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {loading && (
        <span className="loading loading-bars loading-lg text-blue-600"></span>
      )}
      {data.length > 0 && (
        <>
          <div className="w-full overflow-x-auto">
            <table className="table w-full min-w-max" key={data.id}>
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
                {data.map((medal) => (
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

          <div className="pagination flex justify-center items-center gap-2 mt-4">
            <button
              className="btn"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <Arrow direction="left" />
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              className="btn"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <Arrow />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
