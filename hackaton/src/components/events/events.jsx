"use client";

import React, { useEffect, useState } from "react";
import { getDisciplineData, getEventsData } from "../../services/olympics";
import Title from "../Title";
import Card from "../Card";
import EventCard from "../EventCard";

const Events = () => {
  const [data, setData] = useState([]);
  const getday = new Date()
  const formatDate = `${getday.getUTCFullYear()}-${(getday.getUTCMonth() + 1).toString().padStart(2, '0')}-${getday.getUTCDate().toString().padStart(2, '0')}`
  console.log(formatDate)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEventsData(`?date=${formatDate}`);
        setData(Object.values(result)[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3 m-8 p-7">
      {data.length !== 0 && data.map((event) => 
      <EventCard key={event.id} date={event}/>
    )
      }
    </div>
  );
};

export default Events;
