"use client";

import React, { useState, useEffect } from "react";
import { getEventsAllFilter, getEventsData } from "../../services/olympics";
import GamePage from "../../components/gameEvents/GamePage";
import { Arrow, IconeCompetition } from "../../icons/icons";
import GameTitleEvents from "../../components/gameEvents/GameTitleEvents";
import Disciplines from "../../components/disciplines/disciplines";
import TitleComponent from "../../components/Title/TitleComponent";

const Page = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getEventsAllFilter(`?page=${page}`);
        setData(Object.values(result)[0]);
        const pagination = Object.values(result)[2] || {};
        setTotalPages(pagination.last_page || 1);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      scroll(0, 0);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center flex-wrap flex-col">
      {data.length !== 0 && (
        <>
          <GameTitleEvents title={"ALL SPORTS"} />
        </>
      )}
      <div className="flex items-center justify-around bg-primary p-2 w-full">
        <div>
          <h2 className="text-base-100 text-lg font-semibold">Matchs</h2>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <span className="loading loading-bars m-auto w-20 text-blue-800"></span>
        </div>
      )}
      <div className="grid md:grid-cols-2 lg:grid-col-3">
        {data.length !== 0 &&
          data.map((event, index) => <GamePage key={index} data={event} />)}
      </div>

      <div className="pagination">
        <button
          className="btn"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <Arrow direction={1} />
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
      <div className=" w-full my-2">
        <TitleComponent title={"ALL DISCdIPLINES"}>
          <div className="absolute right-0">
            <IconeCompetition />
          </div>
        </TitleComponent>
        <Disciplines />
      </div>
    </div>
  );
};

export default Page;
