import { NavLink } from "react-router-dom";
import logo from "../assets/logo_5.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-gray-500 flex w-full h-18 mr-10">
          <div className="flex justify-center my-auto items-center ml-24">
            <img className="size-12 text-white" src={logo} alt="logo" />
          </div>
          <div className="justify-center items-cente my-auto space-x-6 mx-auto text-gray-300">
            <NavLink className='hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white' to="/">Home</NavLink>
            <NavLink className='hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white' to="/">About</NavLink>
            <NavLink className='hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white' to="/">Music</NavLink>
            <NavLink className='hover:text-gray-400 hover:border-b-[3px] pb-[4px] hover:border-white' to="/">video</NavLink>
          </div>
          <div className='space-x-4 flex justify-center my-auto mr-24'>
            <button className="text-gray-700 border-2 border-transparent hover:text-gray-800 hover:border2 rounded-md px-2 hover:border-gray-600">Log In</button>
            <button className="text-gray-700 border-2 border-transparent hover:text-gray-800 hover:border2 rounded-md px-2 hover:border-gray-600">Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
