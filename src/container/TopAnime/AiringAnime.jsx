import React from 'react'
import { useGetAiringAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const AiringAnime = () => {

  const { data, isFetching, error } = useGetAiringAnimeQuery();
 
  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full text-center sm:text-start ">
          <h1 className="text-white text-3xl font-semibold">Airing Anime</h1>
        </div>
        <div
        className="mainWrapper">
          {data && Array.isArray(data) ? data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))
          : null
        }
        </div>
      </div>
    </>
  )
}

export default AiringAnime;