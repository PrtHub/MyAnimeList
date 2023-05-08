import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetFavAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const FavoriteCard = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetFavAnimeQuery();
  const FavAnime = data?.slice(0,14)
  if (isFetching) return <Loader  />;

  if (error) return <Error />;

  const handleSeeMore = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/favorite-anime')
 }

  return (
    <>
     <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 ">
        <div className=" w-full flex items-center justify-between ">
          <h1 className="text-white text-lg sm:text-3xl font-semibold">Most Favorite Anime</h1>
          <button>
            <div
              onClick={handleSeeMore}
              className="uppercase bg-transparent border-none outline-none text-xs sm:text-base text-[#563bfa] font-medium "
            >
              SEE MORE +
            </div>
          </button>
        </div>
        <div
        className="flex flex-row flex-wrap gap-5 justify-center sm:justify-start  rounded ">
          {FavAnime?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </div>
      </div>
    </>
  )
}


export default FavoriteCard;