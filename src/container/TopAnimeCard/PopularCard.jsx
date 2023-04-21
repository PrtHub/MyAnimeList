import React from 'react'
import { Link } from 'react-router-dom'
import { useGetPopularAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const PopularCard = () => {
  const { data, isFetching, error } = useGetPopularAnimeQuery();
  const PopAnime = data?.slice(0,7)
  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Most Popular Anime</h1>
          <button>
            <Link
              to="/popular-anime"
              className="uppercase bg-transparent border-none outline-none text-xs sm:text-base text-[#563bfa] font-medium "
            >
              SEE MORE +
            </Link>
          </button>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-between rounded ">
          {PopAnime?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </div>
      </div>
    </>
  )
}

export default PopularCard