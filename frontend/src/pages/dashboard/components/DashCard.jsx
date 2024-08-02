import React from "react";

const DashCard = ({ title, amount, period }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-2  border p-3 rounded-md text-white bg-gray-900">
      <div className="w-full flex flex-row items-center justify-between">
        <h2>{title}</h2>
        <p>$</p>
      </div>
      <h1 className="font-bold text-3xl">{amount}</h1>
      <p>{period}</p>
    </div>
  );
};

export default DashCard;
