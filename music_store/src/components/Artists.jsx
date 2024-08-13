import { artists } from "./data/musicData";
import { CgArrowLongRight } from "react-icons/cg";

const Artists = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-br from[#281A37] to[#1C1928] py-24 mb-28">
        <div className="">
          <div className="flex justify-center mb-20 text-6xl text-slate-300 font-semibold">
            <h1>Trending Artists</h1>
          </div>
          <div className="flex space-x-6">
            {artists.map((artist) => (
              <div className="border[1px] p-4 rounded-lg bg-slate-50 space-y-10 bg-gradient-to-br from-[#281A37] to-[#1C1928]">
                <div className="space-y-4">
                  <div className="">
                    <img
                      src={artist.image}
                      alt="artist"
                      className="size-24 rounded-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <h1 className="font-semibold text-slate-200">
                      {artist.name}
                    </h1>
                    <h1 className="text-gray-400 text-xs ">
                      {artist.songs} Songs
                    </h1>
                  </div>
                  <button className="flex space-x-4 px-2 rounded-md text-gray-400 hover:bg-slate-500 hover:text-slate-200 transition-all ease-out">
                    <h1>Explore</h1>
                    <CgArrowLongRight className="flex items-center my-auto " />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-gradient-to-r from-slate-600 px-4 py-2 rounded-lg text-slate-300 border-[1px] hover:from-slate-500 hover:to-slate-800 transition duration-300">See All (654)</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
