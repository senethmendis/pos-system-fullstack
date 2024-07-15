import React from "react";
import { CustomerTableColumns } from "../constants/index";
import Button from "../components/Button";
import { bin, edit } from "../assets";

const CustomerPage = () => {
  return (
    <section className="w-full h-full flex flex-row bg-parimary-gray">
      <div className="w-full h-full flex flex-col p-3">
        <h1 className="py-5">Customer Manager</h1>
        <table className="table-auto border-collapse border border-slate-200">
          <thead>
            <tr>
              {CustomerTableColumns.map((head, i) => (
                <th key={i} className="border">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">1</td>
              <td className="border">1</td>
              <td className="border">1</td>
              <td className="border">1</td>
              <td className="border">
                <Button
                  text="Edit"
                  color="bg-orange-400"
                  isIcon
                  icon={edit}
                  invertIcon
                  customSytles="text-white font-semibold"
                />
              </td>
              <td className="border">
                <Button
                  text="Delete"
                  color="bg-red-400"
                  isIcon
                  icon={bin}
                  invertIcon
                  customSytles="text-white font-semibold"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CustomerPage;
