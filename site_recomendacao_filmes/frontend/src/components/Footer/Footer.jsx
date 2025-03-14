import React from 'react'
import './Footer.css'
import yt from '../../assets/youtube_icon.png'
import x from '../../assets/twitter_icon.png'
import fb from '../../assets/facebook_icon.png'
import insta from '../../assets/instagram_icon.png'

// Rodapé da página
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={yt} alt="" />
        <img src={x} alt="" />
        <img src={fb} alt="" />
        <img src={insta} alt="" />
      </div>
      <ul>
        <li>Descrição de Áudio</li>
        <li>Termos de uso</li>
        <li>Privacidade</li>
        <li>Fale conosco</li>
      </ul>
      <p className='copyright-text'>ⓒ F Inc - 2025</p>
    </div>
  )
}

export default Footer
