import React from "react";
import Header from "./header";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen w-screen bg-gray-100">
        <Navbar />
        <div className="flex flex-grow justify-center">
          <div className="p-5 w-full lg:w-5/12 bg-white">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
