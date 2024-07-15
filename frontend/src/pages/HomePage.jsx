import React from "react";
import { DummyProductData, subFilters } from "../constants";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { plus } from "../assets";

const HomePage = () => {
  return (
    <section className="w-full h-full flex flex-row bg-parimary-gray">
      <div className="w-full h-full p-3">
        <div className="w-full items-center flex flex-row border border-gray-100 justify-evenly bg-white py-1 rounded-md mb-5 shadow-2xl">
          {subFilters.map((filter, i) => (
            <p
              key={i}
              className="px-2 capitalize cursor-pointer rounded-md hover:bg-orange-400 hover:border-orange-400 hover:text-white transition-all duration-150"
            >
              {filter}
            </p>
          ))}
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 overflow-y-scroll overflow-x-hidden h-[648px] gap-4 px-2 no-scrollbar">
            {DummyProductData.map((product, i) => (
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.Price}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-white">
        <div className="w-full border-l border-gray-100 p-2 flex justify-between">
          <Button
            icon={plus}
            isIcon
            text={"Add Customer"}
            color={"bg-gray-200"}
          />
        </div>
        {/* cart items */}
        <div></div>
      </div>
    </section>
  );
};

export default HomePage;

export const CartItemRow = () => {
  return <div>test row</div>;
};
