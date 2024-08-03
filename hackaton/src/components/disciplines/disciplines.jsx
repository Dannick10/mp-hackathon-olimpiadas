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

  let category = [];

  if (data !== 0) {
    data.map((names) => category.push(names));
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
  };

  const groupedCategories = groupByInitialLetter(data);

  return (
    <div className="flex flex-col gap-3 m-8 p-7">
      {Object.keys(groupedCategories)
        .sort()
        .map((letter) => (
          <div key={letter} className="relative flex flex-col gap-2">
            <div>
              <Title letter={letter} />
            </div>

            <div className="flex flex-col flex-wrap gap-4">
              {groupedCategories[letter].map((discipline) => (
                <Card
                  key={discipline.id}
                  name={discipline.name}
                  imgLight={discipline.pictogram_url}
                  imgDark={discipline.pictogram_url_dark}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Disciplines;
