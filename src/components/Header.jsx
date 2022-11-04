import React from 'react'
import LOGO from '../assets/troll-face.png'


const Header = () => {
  return (
    <header className='header'>
        <img src={LOGO} alt="logo" className='header__img' />
        <h2 className='header__title'>Meme Generator</h2>
        <h4 className='header__project'>React Project for Practice</h4>
    </header>
  )
}

export default Header

