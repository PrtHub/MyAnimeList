import React from "react";
import { useGetAllAnimeQuery } from "../../redux/animeApi";
import { Error, Loader } from "../../components";
import {AnimeCard} from "../../components";

const AllAnime = () => {
  const { data, isFetching, error } = useGetAllAnimeQuery();
  if (isFetching) return <Loader title="Loading..." />;

  if (error) return <Error />;

  return (
    <>
      <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full text-center sm:text-start">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Top Anime</h1>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-center sm:justify-between">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))
          : null
        }
        </div>
      </div>
    </>
  );
};

export default AllAnime;
