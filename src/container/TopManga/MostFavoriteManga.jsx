import React from 'react'
import { AnimeCard, Error, Loader } from '../../components';
import { useGetFavMangaQuery } from '../../redux/animeApi';


const MostFavoriteManga = () => {

  const { data, isFetching, error } = useGetFavMangaQuery();
  
  if (isFetching) return <Loader title="Loading Songs..." />;

  if (error) return <Error />;
  return (
    <>
     <div className="w-full mt-10 text flex flex-col items-start gap-5 px-6 relative ">
        <section className=" w-full text-center sm:text-start ">
          <h1 className="headerText">Favorite Manga</h1>
        </section>
        <section
        className="mainWrapper">
          {data && Array.isArray(data) ?  data?.map((anime) => (
           <AnimeCard anime={anime}  key={anime.myanimelist_id}/>         
          )) 
        : null
        }
        </section>
      </div>
    </>
  )
}

export default MostFavoriteManga