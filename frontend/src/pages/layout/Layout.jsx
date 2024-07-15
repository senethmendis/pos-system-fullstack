import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <main>
      <div className="max-w-[1000px] h-screen mx-auto py-10">
        <div className="w-full h-full rounded-3xl bg-parimary-gray shadow-2xl border">
          <HeaderBar />
          <Navbar />

          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
