import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const loaction = useLocation();
  const [menu, setMenu] = useState(false);

  const loactionPath = (route) => {
   if(route === location.pathname) {
    return true
   }
  }

  return (
    <>
      <nav className="flex-1 flex flex-row justify-between items-center  text-white px-6 py-4 ">
        <div className="menu relative">
          <div className="menu-button">
            {menu ? (
              <AiOutlineClose
                className="w-[28px] h-[28px] object-contain text-white cursor-pointer"
                onClick={() => setMenu(false)}
              />
            ) : (
              <HiMenu
                className="w-[28px] h-[28px] object-contain text-white cursor-pointer"
                onClick={() => setMenu(true)}
              />
            )}
          </div>
          {menu && (
            <ul className="absolute top-[45px] right-[-110px] w-36 h-auto flex flex-col justify-center items-center py-6 gap-5 rounded-lg sidebar shadow-xl background z-10">
              <li>
                <Link
                  to="/"
                  className={`font-sans text-2xl hover:text-gray-300 transition-all duration-200 ${loactionPath("/") && "text-[#563bfa]"}`}
                >
                  Anime
                </Link>
              </li>
              <li>
                <Link
                  to="/manga"
                  className={`font-sans text-2xl hover:text-gray-300 transition-all duration-200 ${loactionPath("/manga") && "text-[#563bfa]"}`}
                >
                  Manga
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div>
          <h1><Link to='/' className="logo text-2xl sm:text-3xl font-semibold ">MyAnimeList</Link>
          </h1>
        </div>
        <div>
          <SearchBar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
