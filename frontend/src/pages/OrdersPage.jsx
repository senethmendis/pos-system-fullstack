import React from "react";
import { OrdersData } from "../constants";
import Button from "../components/Button";

const OrdersPage = () => {
  return (
    <section className="w-full h-[680px]  flex flex-col bg-slate-100">
      <div className="h-[650px] overflow-y-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {OrdersData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col justify-between w-full h-[350px] bg-white p-2 rounded-md"
          >
            <div className="w-full">
              <div className="w-full flex flex-row justify-between">
                <h2 className="text-lg font-bold">{card.customerName}</h2>
                <p className="text-lg font-bold">{card.status}</p>
              </div>

              <p className="text-lg font-bold">{card.dateTime}</p>
              <hr />
              <div className="w-full h-full">
                {card.products.map((product, i) => (
                  <div className="w-full flex-row flex justify-between">
                    <p key={i}>{product.productName}</p>
                    <p key={i}>{product.quantity}</p>
                    <p key={i}>{product.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 flex-col w-full">
              <hr />
              <div className="w-full flex justify-between flex-row">
                <strong>Total</strong>
                <strong>{card.total}</strong>
              </div>
              <div className="w-full flex gap-3 justify-between flex-row">
                <Button
                  text="See Details"
                  color="bg-orange-500"
                  customSytles="text-white font-semibold"
                  width="w-full"
                />
                <Button
                  text="Pay Bills"
                  color="bg-green-500"
                  customSytles="text-white font-semibold"
                  width="w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
