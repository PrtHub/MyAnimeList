import React from 'react'

import { useGetFavAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const MostFavorite = () => {
  const { data, isFetching, error } = useGetFavAnimeQuery();

  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full text-center sm:text-start ">
          <h1 className="headerText">Most Favorite Anime</h1>
        </div>
        <div
        className="mainWrapper">
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


export default MostFavorite;