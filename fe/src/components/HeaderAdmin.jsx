import React from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";

const HeaderAdmin = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-xl hover:text-gray-400 cursor-pointer" />
        <FaUserCircle className="text-2xl hover:text-gray-400 cursor-pointer" />
      </div>
    </header>
  );
};

export default HeaderAdmin;
