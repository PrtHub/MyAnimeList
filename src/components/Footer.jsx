import React, { useState } from "react";
import { ImYoutube } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <div className="mt-20 flex flex-1 flex-col sm:flex-row gap-10 sm:gap-0  justify-center sm:justify-between items-center px-6 py-10  border-t-[1px] border-[#563bfa]  ">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <div className="flex items-center gap-4  ">
            <ImYoutube className="w-5 h-5 text-[#563bfa] hover:text-white cursor-pointer" />
            <AiOutlineTwitter className="w-5 h-5 text-[#563bfa] hover:text-white cursor-pointer" />
            <FaTelegramPlane className="w-5 h-5 text-[#563bfa] hover:text-white cursor-pointer" />
            <FaFacebookF className="w-5 h-5 text-[#563bfa] hover:text-white cursor-pointer" />
          </div>
          <h1>
            <Link
              to="/"
              className="logo text-lg sm:text-3xl font-semibold text-white"
            >
              MyAnimeList
            </Link>
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            id="search-field"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[250px]  bg-[#563bfa] border-none outline-none text-base text-white px-3 py-2 rounded "
          />
          </form>
        </div>
        <div className="flex flex-col gap-4 text-white ">
          <div className="flex justify-around ">
            <Link to="/" className="hover:text-[#563bfa]">
              Anime
            </Link>
            <Link to="/manga" className="hover:text-[#563bfa]">
              Manga
            </Link>
          </div>
          <div>
            <p>2023&copy; All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
