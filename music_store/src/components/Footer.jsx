import { FaPhoneAlt, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="mb-24 p-0">
        <div>
          <div className="flex">
            <div className="ml-24">
              <button className="">
                <h1 className="font-semibold text-slate-200 hover:bg-slate-300 hover:text-slate-700 p-2 rounded-lg transition-all ease-out duration-300">
                  Music Store
                </h1>
              </button>
            </div>
            <div className="space-x-20 flex mx-auto">
              <div>
                <div className="flex justify-center items-center mb-4">
                  <h1 className="text-slate-300">Contact</h1>
                </div>
                <div className="text-slate-500 space-y-4">
                  <div className="flex space-x-4 items-center">
                    <FaPhoneAlt />
                    <h1>+25109990909</h1>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <FaTelegram />
                    <h1>@musicStore</h1>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <FaInstagram />
                    <h1>Music Store</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="space-y-4">
                  <div>
                    <button className="border-2 border-transparent pb-1 text-slate-200 hover:border-2 rounded-md px-2 hover:border-gray-300">
                      Log In
                    </button>
                  </div>
                  <div>
                    <button className="text-slate-800 border-2 pb-1 font-semibold bg-slate-300 hover:text-slate-200 rounded-md px-2 hover:bg-transparent transition-all ease-in duration-40">
                      Sing Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="felx justify-end ml-auto mr-12">
              <div className="space-y-4 ">
                <div>
                  <h1 className="text-slate-300">Contact Us</h1>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="" className="text-slate-400">
                      Email:
                    </label>
                    <br />
                    <input className="bg-slate-500 bg-opacity-65 text-slate-200 h-8 pl-2 rounded-sm outline-none focus:ring-1 focus:ring-slate-300 focus:bg-opacity-75 transition duration-200" type="email" placeholder="Enter email..."/>
                  </div>
                  {/* <br /> */}
                  <div className="space-y-2">
                    <label htmlFor="" className="text-slate-400">
                      Message:
                    </label>
                    <br />
                    <input className="bg-slate-500 bg-opacity-65 text-slate-200 h-8 pl-2 rounded-sm outline-none focus:ring-1 focus:ring-slate-300 focus:bg-opacity-75 transition duration-200" type="text" placeholder="Enter message..."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <h1 className="text-slate-300">Enjoy Uninterrupted Music Streaming</h1>
          </div>
          <hr className="border-slate-500 mx-[24%] border-t-4 rounded-lg"/>
          <div className="flex justify-center mt-4">
            <h1 className="text-slate-500">2024 &copy;  music store</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
