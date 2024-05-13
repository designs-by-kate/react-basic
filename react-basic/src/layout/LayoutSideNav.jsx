import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNavbar from "./SideNavbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <SideNavbar />
        <main className="flex-1 bg-white">{children}</main>
      </div>
      <Footer className="bg-gray-200" />
    </div>
  );
};

export default Layout;
