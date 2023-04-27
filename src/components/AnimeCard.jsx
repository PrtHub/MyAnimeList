import React from "react";
import star from "../assets/star.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const AnimeCard = ({ anime }) => {
  return (
    <div
      className="relative flex flex-row text-white cursor-pointer box-shadow sidebar"
    >
      <img src={anime.picture_url} alt="" className="w-[150px] h-[172px]" />
      <div className="absolute top-0 left-0 ">
        <p className="bg-[#563bfa] px-2 py-0 text-lg font-medium">
          {anime.rank}
        </p>
      </div>
      <Link
        target="_blank"
        to={anime.myanimelist_url}
        className=" p-1 absolute bottom-0 left-0 flex flex-1 w-full flex-col bg-black bg-opacity-[0.8] hover:bg-[#563bfa] hover:bg-opacity-[0.7] cursor-pointer "
      >
        <div>
          <h2>
            {anime?.title.length > 15
              ? ` ${anime?.title.slice(0, 15)}...`
              : anime?.title}
          </h2>
        </div>
        <div className="flex flex-row items-center gap-1">
          <img src={star} alt="" className="w-3 h-3" />
          <p>{anime.score}</p>
          <BsFillPersonFill className="w-3 h-3" />
          <p> {parseInt(anime.members).toLocaleString()} </p>
        </div>
      </Link>
      
    </div>
  );
};

export default AnimeCard;
