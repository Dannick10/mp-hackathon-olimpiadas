"use client";

import React, { useEffect, useState } from "react";
import { getDisciplineData } from "../../services/olympics";
import Title from "../Title";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

const Disciplines = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDisciplineData();
        setData(Object.values(result)[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let category = [];

  if (data !== 0) {
    data.map((name) => category.push(name));
  }
  const groupByInitialLetter = (categories) => {
    return categories.reduce((acc, category) => {
      const initialLetter = category.name.charAt(0).toUpperCase();
      if (!acc[initialLetter]) {
        acc[initialLetter] = [];
      }
      acc[initialLetter].push(category);
      return acc;
    }, {});
    s;
  };

  const groupedCategories = groupByInitialLetter(data);

  return (
    <div className="flex flex-col justify-center items-center ">
      {Object.keys(groupedCategories)
        .sort()
        .map((letter, index) => (
          <div className="relative flex flex-col gap-2">
            <div className="glass flex justify-center rounded-md  z-10 sticky top-24">
              <Title letter={letter} />
            </div>

            {groupedCategories[letter].map((discipline) => (
              <div className="sticky top-0">
              <Card
                name={discipline.name}
                imgLight={discipline.pictogram_url}
                imgDark={discipline.pictogram_url_dark}
                index={index}
                id={discipline.id}
              />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Disciplines;
