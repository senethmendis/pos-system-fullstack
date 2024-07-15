import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <main className="max-w-[1260px] h-full  my-auto  mx-auto py-5">
      <div className="w-full h-full flex flex-col   shadow-2xl border py-4">
        {/* includes search bar */}
        <HeaderBar />

        <div className="h-full flex flex-row ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Layout;
