import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"

function index() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default index;
