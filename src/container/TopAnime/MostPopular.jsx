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
        <section className=" w-full text-center sm:text-start ">
          <h1 className="headerText">Most Popular Anime</h1>
        </section>
        <section
        className="mainWrapper">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id} />         
          ))
          : null
          }
        </section>
      </div>
    </>
  )
}

export default MostPopular