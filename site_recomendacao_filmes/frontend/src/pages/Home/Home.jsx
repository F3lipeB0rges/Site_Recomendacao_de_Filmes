import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/one_piece_fundo.png'
import hero_title from '../../assets/one_piece_logo.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCardsAvaliados from '../../components/TitleCards/TitleCards-Avaliados'
import TitleCardsPopulares from '../../components/TitleCards/titleCards-Populares'
import TitleCardsTrend from '../../components/TitleCards/TitleCards-Trending'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
      <img src={hero_banner} alt="" className='banner-img'/>
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>O jovem pirata Monkey D. Luffy veste o chapéu de palha e, com sua tripulação atrapalhada, zarpa em uma jornada épica nesta adaptação em live-action do popular mangá.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Assitir</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />Mais informações</button>
        </div>
        <h2>Títulos Populares</h2>
        <TitleCardsPopulares/>
        <h2>Melhores Avaliados</h2>
        <TitleCardsAvaliados/>
        <h2>Recomendados para você</h2>
        <TitleCardsTrend/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
