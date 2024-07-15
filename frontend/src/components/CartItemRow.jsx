import React from "react";
import { cancel } from "../assets";

const CartItemRow = ({ title, price, id }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full p-2 rounded-md bg-parimary-gray">
      <div className="flex flex-row items-center">
        <p className="px-2 text-[14px] font-semibold">{id}</p>
        <p className="text-[13px]">{title}</p>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <p>Rs: {price}</p>
        <button>
          <img src={cancel} alt="cancel icon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;
