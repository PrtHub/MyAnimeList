import React from 'react'
import { Hero } from '../components'
import { FavMangaCard, LightNovelCard, MangaCard, PopMangaCard } from '../container/TopMangaCard'

const Manga = () => {
  return (
    <div className='mt-5 px-0 sm:px-6 z-0'>
       <Hero/>
       <MangaCard/>
       <PopMangaCard/>
       <FavMangaCard/>
       <LightNovelCard/>
    </div>
  )
}

export default Manga