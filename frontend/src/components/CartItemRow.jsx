import React, { useState } from "react";
import { cancel } from "../assets";

const CartItemRow = ({ title, price, id, count, onClickRemove }) => {
  const [Qty, setQty] = useState(count);

  const handleQtyChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQty(value);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between w-full p-2 rounded-md bg-primary-gray hover:bg-slate-100">
      <div className="flex flex-row items-center">
        <p className="px-2 text-[14px] font-semibold">{count}</p>
        <p className="text-[13px]">{title}</p>
      </div>

      <div className="flex flex-row gap-5 items-center">
        <input
          type="number"
          className="w-10 flex items-center justify-center text-center outline-none"
          min={1}
          value={Qty}
          onChange={handleQtyChange}
        />

        <div className="flex flex-row gap-3">
          <p>Rs: {price}</p>
          <button onClick={onClickRemove}>
            <img src={cancel} alt="cancel icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemRow;
