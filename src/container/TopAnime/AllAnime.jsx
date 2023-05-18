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
        <section className=" w-full text-center sm:text-start">
          <h1 className="headerText">Top Anime</h1>
        </section>
        <section
        className="mainWrapper">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))
          : null
        }
        </section>
      </div>
    </>
  );
};

export default AllAnime;
