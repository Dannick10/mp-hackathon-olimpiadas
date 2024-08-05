import React from "react";
import Image from "next/image";

const Competitor = ({ date }) => {
  console.log(date);
  return (
    <tr className="border-b  hover:bg-gray-50 h-40">
      <td className="w-4 p-4">
        <p className="font-semibold">{date.position + 1}</p>
      </td>
      <td className="w-[50px] h-[50px] p-4 ">
        <img  src={date.country_flag_url} alt={date.country_id} priority />
      </td>
      <td className="w-4 p-4">
        <p>{date.country_id}</p>
      </td>
      <td className="w-4 p-4">
        <p>{date.competitor_name}</p>
      </td>
    </tr>
  );
};

export default Competitor;
