import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <>
      <Navbar />

      <main className="py-12 px-6 2xl:px-6 container">
        <Outlet />
      </main>
    </>
  );
};

export default Layouts;
