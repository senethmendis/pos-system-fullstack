import React from "react";
import { CustomerTableColumns } from "../constants/index";
import Button from "../components/Button";
import { bin, edit } from "../assets";

const CustomerPage = () => {
  return (
    <section className="w-full h-full flex flex-row bg-parimary-gray">
      <div className="w-full h-full flex flex-col p-3">
        <h1 className="py-5">Customer Manager</h1>
      </div>
    </section>
  );
};

export default CustomerPage;
