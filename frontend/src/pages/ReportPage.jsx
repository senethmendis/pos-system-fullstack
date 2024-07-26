import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { reporticon } from "../assets";

const ReportPage = () => {
  const [salesDetails, setSalesDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/sales");
        setSalesDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(salesDetails);
  return (
    <section className="w-full h-full flex flex-col bg-parimary-gray px-5">
      <h1 className="my-5 font-semibold text-2xl">Genarate Report</h1>
      <div className="py-4  flex flex-row items-center gap-4">
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name=""
            id="startDate"
            className="px-2 py-1 rounded-md"
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id=""
            className="px-2 py-1 rounded-md"
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
      </div>
      <Button
        icon={reporticon}
        isIcon
        text={"Get Report"}
        color={"bg-green-500"}
        invertIcon
        customSytles={"text-white"}
      />
      <div className="w-full h-[700px] flex flex-row overflow-x-hidden overflow-y-scroll pt-10">
        <table className="min-w-full bg-white border border-gray-200 ">
          <thead>
            <tr>
              <th className="px-4 border-b text-start">Sale id</th>
              <th className="px-4 border-b text-start">Final Amount</th>
              <th className="px-4 border-b text-start">Method</th>
              <th className="px-4 border-b text-start">Amout</th>
              <th className="px-4 border-b text-start">Date</th>
              <th className="px-4 border-b text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {salesDetails.map((sales, index) => (
              <tr key={sales._id} className="hover:bg-gray-200 cursor-pointer">
                <td className="px-4  border-b">
                  <span>{index + 1}</span>
                </td>
                <td className="px-4  border-b">
                  <span>{sales.final_amount}</span>
                </td>

                <td className="px-4  border-b">
                  <span>{sales.payment_method}</span>
                </td>

                <td className="px-4  border-b">
                  <span>{sales.total_amount}</span>
                </td>

                <td className="px-4  border-b">{sales.sale_date}</td>

                <td className="px-4  border-b">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ReportPage;
