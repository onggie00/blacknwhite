import React from "react";
import { Link } from "react-router-dom";

//import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default Dashboard;
