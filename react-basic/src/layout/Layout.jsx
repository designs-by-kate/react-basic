import React from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" /> {/* Fixed header */}
      <Navbar className="fixed top-header left-0 w-full z-40 bg-gray-800 text-white shadow-md" /> {/* Fixed navbar */}
      <main className="mt-24">{children}</main> {/* Add margin top to prevent content from being hidden under the fixed header and navbar */}
      <Footer className="absolute bottom-0 left-0 w-full" /> {/* Absolute footer */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
