import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Earnings',
        data: [1200, 1900, 3000, 5000, 2400, 3200],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const pieData = {
    labels: ['Facebook', 'YouTube', 'Direct Search'],
    datasets: [
      {
        data: [33, 55, 12],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <section className="p-4 w-full h-[700px] overflow-y-auto overflow-x-hidden">
      {/* Dashboard Overview */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex flex-wrap mt-4">
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-gray-500">Current Month Earnings</p>
              <h2 className="text-2xl font-bold">$3468.96</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-2">
            <div className="bg-white shadow rounded-lg p-4">
              <p className="text-gray-500">Current Month Sales</p>
              <h2 className="text-2xl font-bold">82</h2>
            </div>
          </div>
          <div className="w-full lg:w-1/4 p-2">
            <button className="w-full bg-pink-500 text-white py-2 rounded-lg">
              Last Month Summary
            </button>
          </div>
        </div>
      </div>

      {/* Statistics and Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Wallet Balance</p>
          <h2 className="text-2xl font-bold">$4567.53</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Referral Earning</p>
          <h2 className="text-2xl font-bold">$1689.53</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Estimate Sales</p>
          <h2 className="text-2xl font-bold">$2851.53</h2>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-500">Earning</p>
          <h2 className="text-2xl font-bold">$52567.53</h2>
        </div>
      </div>

      <div className="w-full flex flex-row gap-8 items-center">
        <div className="w-1/2 h-94">
          {/* Line Chart */}
          <div className="mb-6 h-full">
            <div className="bg-white shadow rounded-lg p-4 h-full">
              <h3 className="text-lg font-bold mb-4">Earnings Overview</h3>
              <Line data={lineData} />
            </div>
          </div>
        </div>
        {/* Pie Chart */}
          <div className="w-full md:w-1/2 lg:w-1/3 h-auto ">
            <div className="mb-6 h-full">
              <div className="bg-white shadow rounded-lg p-4 h-full">
                <h3 className="text-lg font-bold mb-4">Traffic Sources</h3>
                <Pie data={pieData} className="w-full h-full"/>
              </div>
            </div>
          </div>

      </div>


      {/* Order Status */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-bold mb-4">Order Status</h3>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Invoice</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">From</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">12386</td>
              <td className="border px-4 py-2">Charly Dues</td>
              <td className="border px-4 py-2">Brazil</td>
              <td className="border px-4 py-2">$299</td>
              <td className="border px-4 py-2">Process</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12386</td>
              <td className="border px-4 py-2">Marko</td>
              <td className="border px-4 py-2">Italy</td>
              <td className="border px-4 py-2">$2642</td>
              <td className="border px-4 py-2">Open</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12386</td>
              <td className="border px-4 py-2">Daniyel Onak</td>
              <td className="border px-4 py-2">Russia</td>
              <td className="border px-4 py-2">$981</td>
              <td className="border px-4 py-2">On Hold</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12386</td>
              <td className="border px-4 py-2">Ragil Bastana</td>
              <td className="border px-4 py-2">Korea</td>
              <td className="border px-4 py-2">$369</td>
              <td className="border px-4 py-2">Process</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">12386</td>
              <td className="border px-4 py-2">Sarti Onuska</td>
              <td className="border px-4 py-2">Japan</td>
              <td className="border px-4 py-2">$1240</td>
              <td className="border px-4 py-2">Open</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
