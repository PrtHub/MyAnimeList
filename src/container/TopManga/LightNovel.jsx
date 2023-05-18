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
        <section className=" w-full flex items-center justify-between ">
          <h1 className="headerText">Light Novel</h1>
        </section>
        <section
        className="mainWrapper ">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          )) 
        : null
        }
        </section>
      </div>
    </>
  );
};

export default LightNovel;