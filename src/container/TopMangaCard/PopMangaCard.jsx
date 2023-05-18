import React from 'react'
import { AnimeCard, Error, Loader } from '../../components';
import { useGetPopMangaQuery } from '../../redux/animeApi';
import {useNavigate } from 'react-router-dom';


const PopMangaCard = () => {
  const navigate = useNavigate();
    const { data, isFetching, error } = useGetPopMangaQuery();
    const PopManga = Array.isArray(data) ? data.slice(0, 14) : [];

    if (isFetching) return <Loader  />;
  
    if (error) return <Error />;

    const handleSeeMore = (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
      navigate('/manga')
   }
  
    return (
      <>
        <div className="w-full mt-14 text flex flex-col items-start gap-5 px-6 relative ">
          <section className=" w-full flex items-center justify-between ">
            <h1 className="headerText">Popular Manga</h1>
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
            {PopManga?.map((anime) => (
             <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
            ))}
          </section>
        </div>
      </>
    )
}

export default PopMangaCard