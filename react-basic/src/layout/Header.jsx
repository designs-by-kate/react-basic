import React from 'react'
import Logo from '../assets/logodesignwhite.png'

const Header = () => {
  return (
    <header className="bg-black py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-8 w-auto mr-4"
            src={Logo}
            alt="Logo"
          />
          <h1 className="text-white text-lg font-semibold">Title</h1>
        </div>
        <div>
          <h1 className="text-white text-lg font-semibold pr-4">Login</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
