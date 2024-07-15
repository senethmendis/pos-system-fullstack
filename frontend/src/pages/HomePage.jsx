import React, { useEffect, useState } from "react";
import { DummyProductData, subFilters } from "../constants";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { plus, reporticon } from "../assets";
import CartItemRow from "../components/CartItemRow";

let DummySalesRow = [
  {
    productId: 1,
    productName: "Product 1",
    Price: "240",
  },
  {
    productId: 2,
    productName: "Product 2",
    Price: "150",
  },
  {
    productId: 3,
    productName: "Product 3",
    Price: "350",
  },
];

const HomePage = () => {
  const [filter, setFilter] = useState("all");
  const [toggleDiscount, setToggleDiscount] = useState(false);
  const [sales, setSales] = useState(DummySalesRow);
  const [totalAmount, setTotalAmount] = useState(0.0);

  useEffect(() => {
    const total = sales.reduce(
      (sum, product) => sum + parseInt(product.Price, 10) * 2,
      10
    );
    setTotalAmount(total);
  }, [sales]);
  return (
    <section className="w-full h-full flex flex-row bg-parimary-gray">
      <div className="w-full h-full p-3">
        <div className="w-full items-center flex flex-row border border-gray-100 justify-evenly bg-white py-1 rounded-md mb-5 shadow-2xl">
          {subFilters.map((filter, i) => (
            <p
              onClick={() => setFilter(filter)}
              key={i}
              className={` px-2 capitalize cursor-pointer rounded-md hover:bg-orange-400 hover:text-white transition-all duration-150`}
            >
              {filter}
            </p>
          ))}
        </div>
        <div className="w-full">
          <div className="grid grid-cols-4 overflow-y-scroll overflow-x-hidden h-[648px] gap-4 px-2 no-scrollbar">
            {DummyProductData.filter((product) => {
              return filter.toLowerCase() === "all"
                ? product
                : product.category.toLowerCase().includes(filter);
            }).map((product, i) => (
              <ProductCard
                key={i}
                title={product.title}
                image={product.image}
                price={product.Price}
                onClick={() => {
                  setSales([
                    ...sales,
                    {
                      productId: product.id,
                      productName: product.title,
                      Price: product.price,
                    },
                  ]);
                  console.log(product);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* right side cart item and total cal */}
      <div className="w-1/2 h-full bg-white">
        <div className="w-full border-l border-b border-gray-100 p-2 flex justify-between">
          <Button
            icon={plus}
            isIcon
            text={"Add Customer"}
            color={"bg-parimary-gray"}
            customSytles={"text-black"}
          />
        </div>
        {/* cart items */}
        <div className="w-full h-full py-4 px-2">
          <div className="w-full h-[430px] overflow-y-scroll overflow-x-hidden  no-scrollbar  flex flex-col gap-2">
            {sales.map((product, i) => (
              <CartItemRow
                key={i}
                count={i + 1}
                id={product.productId}
                title={product.productName}
                price={product.Price}
                getQty={0}
                onClickRemove={() => {
                  setSales(
                    sales.filter((s) => s.productId !== product.productId)
                  );
                }}
              />
            ))}
          </div>
          {/* card bottom part start */}
          <div className="w-full h-full flex flex-col">
            <div className="py-1 flex flex-row justify-between items-center bg-orange-100 rounded-md mt-2 px-2">
              <Button
                text={toggleDiscount ? "Close" : "Add"}
                isBackground={false}
                customSytles="text-black font-semibold"
                onClick={() => setToggleDiscount(!toggleDiscount)}
              />
              <div className="flex flex-row items-center gap-6">
                {toggleDiscount ? (
                  <input
                    type="text"
                    className="w-full h-full px-1 outline-none text-[12px] py-1 rounded-sm"
                  />
                ) : (
                  <>
                    <p className="text-orange-400 text-[14px]">Discount</p>
                    <p className="text-orange-400 text-[14px]">Coupen Code</p>
                  </>
                )}
              </div>
            </div>
            <div className=" w-full h-full py-3">
              <div className="w-full h-full flex flex-col">
                <div className="flex flex-row justify-between">
                  <p>Subtotal</p>
                  <strong className="text-[12px]">200.00</strong>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Tax</p>
                  <strong className="text-[12px]">200.00</strong>
                </div>
                <div className="flex flex-row justify-between">
                  <strong>Payable Amount</strong>
                  <strong>{totalAmount}</strong>
                </div>
              </div>
              <div className="w-full flex flex-row gap-2 py-5">
                <Button
                  text="Print"
                  color="bg-orange-400"
                  width="w-full"
                  isBackground={true}
                  customSytles={"text-white"}
                  isIcon
                  icon={reporticon}
                />
                <Button
                  text="Process"
                  width="w-full"
                  color="bg-primary-light-green"
                  customSytles={"text-white"}
                />
              </div>
            </div>
          </div>
          {/* card bottom part  end*/}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
