import React from "react";
import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <main>
      <HeaderBar />
      <Navbar />

      {/* content of the page */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eligendi.
        Animi, debitis iste? Architecto provident eligendi nobis fugiat sint,
        tenetur aut dolorem, laborum veniam porro earum, nihil rerum iste.
        Aliquid?
      </p>

      <Outlet />
    </main>
  );
};

export default Layout;
