import React from 'react'
import { AnimeCard, Error, Loader } from '../../components';
import { useGetFavMangaQuery } from '../../redux/animeApi';
import { Link, useNavigate } from 'react-router-dom';

const FavMangaCard = () => {
    const navigate = useNavigate();
    const { data, isFetching, error } = useGetFavMangaQuery();
    const FavManga = Array.isArray(data) ? data.slice(0, 14) : [];

    if (isFetching) return <Loader/>;
  
    if (error) return <Error />;

    
  const handleSeeMore = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/favorite-manga')
 }

  return (
    <>
     <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 relative ">
          <section className=" w-full flex items-center justify-between ">
            <h1 className="headerText">Favorite Manga</h1>
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
            {FavManga?.map((anime) => (
             <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
            ))}
          </section>
        </div>
    </>
  )
}

export default FavMangaCard