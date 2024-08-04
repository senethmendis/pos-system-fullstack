import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";
import CustomInputField from "../../components/common/CustomInputField";
import Button from "../../components/common/Button";
import DashCard from "./components/DashCard";
import { dashboardCardItems } from "../../constants/index";
import axios from "axios";
import DashRowCard from "./components/DashRowCard";

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const labels = ["January", "February", "March", "April", "May", "June"];
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const fetchCustomerData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/customers");
      setData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  console.log(data);

  return (
    <section className="p-4 w-full h-[700px]">
      <div className="w-full flex items-center justify-between mb-5">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center">
          <CustomInputField
            inputId={"datePicker"}
            name={"datePicker"}
            inputType="date"
          />
          <Button color="bg-orange-500" text="Download" />
        </div>
      </div>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col gap-5">
          <div className="w-full gap-5 grid grid-cols-4">
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
            <div className="w-1/2 h-[450px] border p-3 rounded-md bg-black">
              <Bar data={chartData} />
            </div>
            <div className="w-1/2 h-[450px] border p-3 rounded-md bg-black">
              <div className="w-full flex flex-col mb-5">
                <h1>Recent Sales</h1>
                <p className="text-[11px]">You made 200 sales this month</p>
              </div>

              <div className="w-full h-[360px] overflow-y-auto overflow-x-hidden no-scrollbar">
                {data.map((row, i) => (
                  <DashRowCard
                    key={i}
                    img={`https://i.pravatar.cc/150?img=${i}`}
                    email={row.email}
                    name={row.first_name}
                    amount={50000}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
