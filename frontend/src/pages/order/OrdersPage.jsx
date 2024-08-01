import React from "react";
import { OrdersData } from "../../constants";
import OrderCard from "./components/OrderCard";

const OrdersPage = () => {
  return (
    <section className="w-full h-[680px]  flex flex-col bg-slate-100">
      <div className="h-[650px] overflow-y-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {OrdersData.map((card, i) => (
          <OrderCard
            key={i}
            customerName={card.customerName}
            dateTime={card.dateTime}
            status={card.status}
            total={card.total}
          >
            {card.products.map((prod, j) => (
              <div key={j} className="w-full flex flex-row justify-between">
                <p>{prod.productName}</p>
                <p>{prod.quantity}</p>
                <p>{prod.price}</p>
              </div>
            ))}
          </OrderCard>
        ))}
      </div>
    </section>
  );
};

export default OrdersPage;
