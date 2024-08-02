import React from "react";

const DashRowCard = ({ img, name, email, amount }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center py-2">
      <div className="flex flex-row items-center gap-5">
        <img src={img} alt="" className=" rounded-full w-10" />
        <div>
          <h3>{name}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <h2>{amount}</h2>
    </div>
  );
};

export default DashRowCard;
