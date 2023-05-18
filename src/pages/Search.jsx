import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSearchAnimeQuery } from '../redux/animeApi';
import { AnimeCard, Error, Loader, SearchCard } from '../components';

const Search = () => {

  const { searchTerm } = useParams();
  const {data, isFetching, error} = useGetSearchAnimeQuery(searchTerm);

  if (isFetching) return <Loader title="Loading...." />;

  if (error) return <Error />;

  return (
    <>
    <div className='flex flex-col mx-5'>
    <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="text-[#563bfa]">{searchTerm}</span>
      </h2>
      <section
        className="flex flex-row flex-wrap gap-5 justify-between rounded ">
          {data?.map((anime) => (
           <SearchCard anime={anime}  key={anime.myanimelist_id} />         
          ))}
        </section>
    </div>
    </>
  )
}

export default Search