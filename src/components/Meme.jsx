import React, { useState, useEffect } from 'react'
import {BsCardImage} from 'react-icons/bs'
import memesData from '../memesData'

const Meme = () => {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })
  
  const [allMemes, setAllMemes] = useState([])

  /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
  */

  /* ======= FETCH DATA from API ======= */
  useEffect(() => {
    async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
    }
    getMemes()
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
}

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value 
    }))

  }

  return (
    <div className='meme-form__container'>
        <div className='meme__form'>
            <input type="text" className='form__input' placeholder='Top text' name='topText' value={meme.topText} onChange={handleChange} />
            <input type="text" className='form__input' placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
            <button className='form__btn' onClick={getMemeImage}>Generate Meme Image <BsCardImage className='img__emoji' /></button>
        </div>

        <div className='meme-image__container'>
          <img src={meme.randomImage} className="meme__image" alt="Meme" />
          <h2 className='meme__text top'>{meme.topText}</h2>
          <h2 className='meme__text bottom'>{meme.bottomText}</h2>
        </div>
  
    </div>

  )
}

export default Meme