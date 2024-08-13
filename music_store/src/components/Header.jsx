import { NavLink } from "react-router-dom";
import logo from "../assets/logo_5-.png";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header
        className={`duration-1000 ease-in-out w-full transition-all ${
          navbar
            ? "bg-gray500 bg-[#0A0C10] bg-opacity-90 flex fixed transition-all duration-300 ease-in z-50"
            : "bg-transparent absolute flex w-full h-18 mr-10 z-10"
        }`}
      >
        <div className="flex  ml-24">
          <button className="flex justify-center my-auto items-center">
            <img className="size-12" src={logo} alt="logo" />
            <h1 className="font-semibold text-slate-200">Music Store</h1>
          </button>
        </div>
        <div className="justify-center items-cente my-auto space-x-6 mx-auto text-gray-100">
          <NavLink
            className="hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white"
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className="hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white"
            to="/"
          >
            Music
          </NavLink>
          <NavLink
            className="hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white"
            to="/"
          >
            video
          </NavLink>
        </div>
        <div className="space-x-4 flex justify-center my-auto mr-24">
          <button className="border-2 border-transparent pb-1 text-slate-200 hover:border-2 rounded-md px-2 hover:border-gray-300">
            Sign Up
          </button>
          <button className="text-slate-700 border-2 pb-1 font-semibold bg-slate-300 hover:text-slate-200 rounded-md px-2 hover:bg-transparent transition-all ease-in duration-400">
            Log In
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
