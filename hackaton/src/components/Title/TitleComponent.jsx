import React from "react";

const TitleComponent = ({ title, children }) => {
  return (
    <div className="bg-blue-pattern bg-cover p-4 py-8 flex justify-between back">
      <div>
        <h2 className="text-white text-2xl font-bold">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TitleComponent;
