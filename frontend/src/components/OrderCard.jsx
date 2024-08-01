import React from "react";
import Button from "./Button";

const OrderCard = ({ customerName, status, dateTime, total, children }) => {
  return (
    <div className="flex flex-col justify-between w-full h-[350px] bg-white p-2 rounded-md">
      <div className="w-full">
        <div className="w-full flex flex-row justify-between">
          <h2 className="text-lg font-bold">{customerName}</h2>
          <p className="text-lg font-bold">{status}</p>
        </div>
        <p className="text-lg font-bold">{dateTime}</p>
        <hr />
        <div className="w-full h-full">{children}</div>
      </div>
      <div className="flex gap-3 flex-col w-full">
        <hr />
        <div className="w-full flex justify-between flex-row">
          <strong>Total</strong>
          <strong>{total}</strong>
        </div>
        <div className="w-full flex gap-3 justify-between flex-row">
          <Button
            text="See Details"
            color="bg-orange-500"
            customStyles="text-white font-semibold"
            width="w-full"
          />
          <Button
            text="Pay Bills"
            color="bg-green-500"
            customStyles="text-white font-semibold"
            width="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
