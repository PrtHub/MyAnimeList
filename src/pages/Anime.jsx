import React from 'react'
import { Hero } from '../components';
import { AiringCard, AllCard, FavoriteCard, MovieCard, PopularCard, UpcomingCard } from '../container/TopAnimeCard';


const Anime = () => {
  return (
    <>
    <div className='mt-5 px-0 sm:px-6 z-0  '>
    <Hero/>
    <AllCard/>
    <AiringCard/>
    <UpcomingCard/>
    <FavoriteCard/>
    <PopularCard/>
    <MovieCard/>
    </div>
    </>
  )
}

export default Anime;