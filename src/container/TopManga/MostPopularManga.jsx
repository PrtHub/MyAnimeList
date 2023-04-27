import React from 'react'
import { AnimeCard, Error, Loader } from '../../components';
import { useGetPopMangaQuery } from '../../redux/animeApi';


const MostPopularManga = () => {

  const { data, isFetching, error } = useGetPopMangaQuery();
  
  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;
  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 relative ">
        <div className=" w-full text-center sm:text-start ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Popular Manga</h1>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-center sm:justify-between  ">
          {data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          ))}
        </div>
      </div>
    </>
  )
}


export default MostPopularManga