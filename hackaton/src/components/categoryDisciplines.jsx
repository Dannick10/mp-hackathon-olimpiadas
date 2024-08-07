import React from "react";
import Image from "next/image";

const CategoryDisciplinesCard = ({ discipline_name, discipline_pictogram }) => {
  return (
    <div className="flex items-center justify-between w-40 p-1 rounded-md">
      <div>
        <p className="text-xm">{discipline_name}</p>
      </div>
      <div>
        <Image
          width={50}
          height={50}
          src={discipline_pictogram}
          alt={discipline_name}
        />
      </div>
    </div>
  );
};

export default CategoryDisciplinesCard;
