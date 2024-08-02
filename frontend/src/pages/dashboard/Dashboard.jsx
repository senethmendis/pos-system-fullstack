import React from "react";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import CustomInputField from "../../components/common/CustomInputField";
import Button from "../../components/common/Button";
import DashCard from "./components/DashCard";
import { dashboardCardItems } from "../../constants/index";

const Dashboard = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "rgb(255, 255, 255)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <section className="p-4 w-full h-[700px]">
      <div className="w-full flex items-center justify-between">
        <h1>Dashboard</h1>
        <div className="flex flex-row items-center">
          <CustomInputField
            inputId={"datePicker"}
            name={"datePicker"}
            inputType="date"
          />
          <Button color="bg-orange-500" text="Downnload" />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-5">
        <div className="w-full  gap-5 grid grid-cols-4">
          {dashboardCardItems.map((card, i) => (
            <DashCard
              key={i}
              title={card.title}
              amount={card.total_revenue}
              period={card.period}
            />
          ))}
        </div>
        <div className="w-full gap-5 flex flex-row items-center text-white">
          <div className="w-1/2  h-[450px] border p-3 rounded-md bg-gray-900 ">
            <Bar data={data} />
          </div>
          <div className="w-1/2  h-[450px] border p-3 rounded-md bg-gray-900 ">
            <div className="w-full flex flex-col">
              <h1>Recent Sales</h1>
              <p className="text-[11px]">You made 200 sales this month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
