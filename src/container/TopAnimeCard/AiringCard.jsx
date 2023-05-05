import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAiringAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const AiringCard = () => {

  const { data, isFetching, error } = useGetAiringAnimeQuery();
  const AirAnime = data?.slice(0,14)
  if (isFetching) return <Loader title="Loading...." />;

  if (error) return <Error />;

  return (
    <>
     <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Airing Anime</h1>
          <button>
            <Link
              to="/air-anime"
              className="uppercase bg-transparent border-none outline-none text-xs sm:text-base text-[#563bfa] font-medium "
            >
              SEE MORE +
            </Link>
          </button>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-center sm:justify-start  rounded ">
          {AirAnime?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </div>
      </div>
    </>
  )
}

export default AiringCard