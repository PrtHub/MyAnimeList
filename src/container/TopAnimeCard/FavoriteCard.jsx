import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetFavAnimeQuery } from '../../redux/animeApi';
import { AnimeCard, Error, Loader } from '../../components';

const FavoriteCard = () => {
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetFavAnimeQuery();
  const FavAnime = Array.isArray(data) ? data.slice(0, 14) : [];

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
        <section className=" w-full flex items-center justify-between ">
          <h1 className="headerText">Most Favorite Anime</h1>
          <button>
            <div
              onClick={handleSeeMore}
              className="seeMore"
            >
              SEE MORE +
            </div>
          </button>
        </section>
        <section
        className="cardWrap">
          {FavAnime?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </section>
      </div>
    </>
  )
}


export default FavoriteCard;