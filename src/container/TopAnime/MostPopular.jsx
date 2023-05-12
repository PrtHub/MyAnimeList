import React from 'react'
import { useGetPopularAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const MostPopular = () => {
  const { data, isFetching, error } = useGetPopularAnimeQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full text-center sm:text-start ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Most Popular Anime</h1>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-between rounded ">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))
          : null
          }
        </div>
      </div>
    </>
  )
}

export default MostPopular