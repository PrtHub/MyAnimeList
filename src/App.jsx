import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Anime, Manga, Search } from './pages'
import { AiringAnime, AllAnime, MostFavorite, MostPopular, Movies,UpcomingAnime } from './container/TopAnime'

import {AllMangas,  LightNovel,  MostFavoriteManga, MostPopularManga} from './container/TopManga'
import { Footer, Navbar } from './components'

const App = () => {
  return (
    <>
    <div className='background w-full h-full '>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Anime/>}/>
      <Route path='/all-anime' element={<AllAnime/>}/>
      <Route path='/air-anime' element={<AiringAnime/>}/>
      <Route path='/favorite-anime' element={<MostFavorite/>}/>
      <Route path='/popular-anime' element={<MostPopular/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/upcoming-anime' element={<UpcomingAnime/>}/>

      <Route path='/manga' element={<Manga/>}/>
      <Route path='/all-manga' element={<AllMangas/>}/>
      <Route path='/favorite-manga' element={<MostFavoriteManga/>}/>
      <Route path='/popular-manga' element={<MostPopularManga/>}/>
      <Route path='/novel' element={<LightNovel/>}/>

      <Route path='/search/:searchTerm' element={<Search/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
