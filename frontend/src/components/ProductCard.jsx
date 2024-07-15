import React from "react";
import Button from "./Button";
import { cart } from "../assets";

const ProductCard = ({ image, title, price, onClick }) => {
  return (
    // add height
    <div
      onClick={onClick}
      className="bg-white w-full h-[200px] border rounded-lg flex flex-col  items-center hover:scale-105 transition-all duration-150"
    >
      <div className="w-full h-1/2">
        <img
          src={image}
          alt="procut img"
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-full p-4">
        <h3 className="text-[15px] font-semibold ">{title}</h3>
        <h4 className="text-[15px]">{price}Rs</h4>
      </div>
    </div>
  );
};

export default ProductCard;
