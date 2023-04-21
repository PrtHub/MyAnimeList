import React from 'react'
import { useGetAnimeMovieQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';


const Movies = () => {
  const { data, isFetching, error } = useGetAnimeMovieQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Anime Movie</h1>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-between rounded ">
          {data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </div>
      </div>
    </>
  )
}

export default Movies;