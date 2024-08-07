"use client";

import React, { useEffect, useState } from "react";
import { getEventsData } from "../../services/olympics";
import GameEvents from "../gameEvents/GameEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const Events = () => {
  const [data, setData] = useState([]);
  const [loading, Setloading] = useState(false)

  const getDay = new Date();
  const formatDate = `${getDay.getUTCFullYear()}-${(getDay.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}-${getDay.getUTCDate().toString().padStart(2, "0")}`;
 
  useEffect(() => {
    const fetchData = async () => {
      Setloading(true)
      try {
        const result = await getEventsData(``);
        setData(Object.values(result)[0]);
      } catch (error) {
        console.error(error);
      }
      Setloading(false)
    };

    fetchData();
  }, [formatDate]);

  return (
    <div className=" gap-3 min-h-[28em] relative w-full bg-gray-800">
      {loading? 
      <div className="flex items-center justify-center bg-gray-800 h-[28em] md:h-[34em] p-8">
      <span className="loading loading-bars m-auto w-20 text-blue-800"></span> 
      </div>
      :
      <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination]}
      >
        {data.length !== 0 &&
          data.map((event, index) => (
            <SwiperSlide key={index}>
              <GameEvents data={event} />
            </SwiperSlide>
          ))}
      </Swiper>
        }
    </div>
  );
};

export default Events;
