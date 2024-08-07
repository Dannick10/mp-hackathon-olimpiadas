'use client'

import React, {useState, useEffect} from "react";

const Competitor = () => {

  const [data, setData] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      Setloading(true);
      try {
        const result = await getCountryData();
        setData(Object.values(result));
      } catch (error) {
        console.error(error);
      }
      Setloading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>

    </div>
  )
};

export default Competitor;
