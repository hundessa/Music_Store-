import { FaPlayCircle } from "react-icons/fa";
import { playlists } from "./data/musicData";
import playlistbg from "../assets/playlist/playlistbg.png";

const PlayList = () => {
  return (
    <>
      <div className="flex mb-44">
        <div className="flex">
          <div className="w-[450px] flex items-center relative left-[50px]">
            <div className="space-y-6">
            <h1 className="text-slate-200 text-3xl flex">
              “Music is the language of the spirit. It opens the secret of life
              bringing peace, abolishing strife.” — Kahlil Gibran
            </h1>
            <p className="text-slate-300 text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quidem magni necessitatibus maiores distinctio in tempora exercitationem architecto porro possimus, deleniti facere inventore natus sed mollitia, ad ipsam ea? Quisquam.</p>
            </div>
          </div>
          <div>
            <img src={playlistbg} alt="" className="" />
          </div>

          <div className="flex-col space-y-6 absolute right-8 bg-transparent bg-[#16181C] p-8 bg-opacity-55 backdrop-brightness-95 border-[1px] border-slate-500 rounded-lg">
            <div className="flex">
              <div>
                <h1 className="text-slate-400 font-semibold text-md">
                  Latest Songs
                </h1>
              </div>
              <div className="flex justify-end ml-auto mr-2 ">
                <button className="text-slate-500 text-sm hover:text-slate-200">
                  View All
                </button>
              </div>
            </div>
            {playlists.map((playlist) => (
              <div className="">
                <div className="flex">
                  <div className="mr-6">
                    <img
                      src={playlist.image}
                      alt=""
                      className="w12 h12 size-10 object-cover"
                    />
                  </div>
                  <div className="text-slate-200 mr-24 flex-1 overflow-hidden">
                    <h1 className="text-[14px] truncate">
                      {playlist.songname}
                    </h1>
                    <h1 className="text-xs text-slate-400">
                      {playlist.artistname}
                    </h1>
                  </div>
                  <div className=" flex space-x-2">
                    <h1 className="text-slate-400 text-xs">{playlist.time}</h1>
                    <div className="text-slate-200">
                      <button className="flex items-center">
                        <FaPlayCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayList;
