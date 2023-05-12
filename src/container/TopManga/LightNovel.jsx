import React from "react";
import { useGetLightNovelQuery } from "../../redux/animeApi";
import { Error, Loader } from "../../components";
import {AnimeCard} from "../../components";


const LightNovel = () => {
  const { data, isFetching, error } = useGetLightNovelQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
      <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 relative ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Light Novel</h1>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-center sm:justify-between  ">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          )) 
        : null
        }
        </div>
      </div>
    </>
  );
};

export default LightNovel;