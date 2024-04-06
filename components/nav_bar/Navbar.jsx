import React from "react";
import Logo from "../../assets/ic_logo.png";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Navbar = ({ auth }) => {
  return (
    <>
      <nav className="flex items-center justify-between  px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center w-full">
          {/* Logo */}
          <img src={Logo.src} alt="Logo" className="h-8" />

          {auth && (
            <div className="flex gap-3 py-2 px-3 bg-white rounded-md max-w-[45rem] w-full justify-center items-center mx-5 max-md:hidden">
              <FaSearch className="w-6 h-6 text-p" />

              <input
                placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
                className="w-full text-neutral-900 text-sm font-normal leading-[18px] tracking-tight border-none outline-none form-input bg-transparent focus:ring-0 "
              />
              <MdCancel className="w-6 h-6 bg-white text-p" />
            </div>
          )}
        </div>

        {auth ? (
          <div className="flex gap-3 items-center justify-center">
            <p className="text-right text-neutral-900 text-base font-medium leading-[10px]">
              Welcome!
            </p>

            <img
              src={"https://via.placeholder.com/36x36"}
              alt="User"
              className="h-8 rounded-full"
            />
          </div>
        ) : (
          <a href="/login" className=" mr-4 text-p">
            LOGIN
          </a>
        )}
      </nav>

      {auth && (
        <div className="flex gap-3 py-2 px-3 bg-white rounded-md max-w-[45rem] w-full justify-center items-center md:hidden">
          <FaSearch className="w-6 h-6 text-p" />

          <input
            placeholder="Bonny and Clyde Street, Ajao Estate, Lagos"
            className="w-full text-neutral-900 text-sm font-normal leading-[18px] tracking-tight border-none outline-none form-input bg-transparent focus:ring-0 "
          />
          <MdCancel className="w-6 h-6 bg-white text-p" />
        </div>
      )}
    </>
  );
};

export default Navbar;
