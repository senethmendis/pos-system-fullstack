
import React from "react";



import { customers } from "../constants";

const CustomerPage = () => {
  return (
    <section className="w-full h-full flex flex-row bg-parimary-gray">
      <div className="w-full h-[700px] flex flex-col p-3">
        <div className="flex justify-between items-center py-5">
          <h1 className="text-xl font-semibold">Customer Manager</h1>
          <button className="px-3 py-1 bg-green-500 text-white rounded">
            Add Customer
          </button>
        </div>
        <div className="overflow-y-scroll">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Customer</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Location</th>
                <th className="px-4 py-2 border-b">Orders</th>
                <th className="px-4 py-2 border-b">Spent</th>
                <th className="px-4 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-200 cursor-pointer">
                  <td className="px-4 py-2 border-b flex items-center">
                    <img
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                      alt={customer.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span>{customer.name}</span>
                  </td>
                  <td className="px-4 py-2 border-b">{customer.email}</td>
                  <td className="px-4 py-2 border-b">{customer.location}</td>
                  <td className="px-4 py-2 border-b">{customer.orders}</td>
                  <td className="px-4 py-2 border-b">{customer.spent}</td>
                  <td className="px-4 py-2 border-b">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">
                      Action
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-5">
          <button className="px-3 py-1 mx-1 bg-gray-300 text-gray-700 rounded">
            &lt;
          </button>
          {[1, 2, 3, 4, 5, 6, 24].map((page) => (
            <button
              key={page}
              className="px-3 py-1 mx-1 bg-gray-300 text-gray-700 rounded"
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 mx-1 bg-gray-300 text-gray-700 rounded">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerPage;
