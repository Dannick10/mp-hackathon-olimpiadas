"use client";

import React, { useEffect, useState } from "react";
import { getEventsData } from "../../services/olympics";
import GameEvents from "../gameEvents/GameEvents";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


const Events = () => {
  const [data, setData] = useState([]);
  const getDay = new Date();
  const formatDate = `${getDay.getUTCFullYear()}-${(getDay.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}-${getDay.getUTCDate().toString().padStart(2, "0")}`;
  console.log(formatDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEventsData(`?date=${formatDate}`);
        setData(Object.values(result)[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [formatDate]);

  return (
    <div className=" gap-3 relative max-w-[80vw]">
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
    </div>
  );
};

export default Events;
