"use client";

import React, { useEffect, useState } from "react";
import { getDisciplineData } from "../../services/olympics";
import Title from "../Title";
import Card from "../Card";

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

  const groupByInitialLetter = (categories) => {
    return categories.reduce((acc, category) => {
      const initialLetter = category.name.charAt(0).toUpperCase();
      if (!acc[initialLetter]) {
        acc[initialLetter] = [];
      }
      acc[initialLetter].push(category);
      return acc;
    }, {});
  };

  const groupedCategories = groupByInitialLetter(data);

  return (
    <div className="flex flex-col justify-center items-center">
      {Object.keys(groupedCategories)
        .sort()
        .map((letter) => (
          <div className="relative flex flex-col gap-2" key={letter}>
            <div className="glass flex justify-center rounded-md z-10 sticky top-24">
              <Title key={letter} letter={letter} />
            </div>

            {groupedCategories[letter].map((discipline) => (
              <div className="sticky top-0" key={discipline.id}>
                <Card
                  key={discipline.id}
                  name={discipline.name}
                  imgLight={discipline.pictogram_url}
                  imgDark={discipline.pictogram_url_dark}
                  index={groupedCategories[letter].indexOf(discipline)}
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
