import memesData from '../data/memesData';
import React from 'react';



const Meme = () =>{

  const [meme, setMeme] = React.useState({
    topText: "Shut Up",
    bottomText: "And Take My Money!",
    randomImage: "https://i.imgflip.com/3si4.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function handleInput(event){
    console.log(meme);
    const {name, value} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]:value
      }
    })
  }

  function getMemeImage(event){
    event.preventDefault();
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor((Math.random() * memesArray.length));
    const url = memesArray[randomNumber].url

    setMeme(prevMeme => {
      return {...prevMeme, topText: prevMeme.topText, bottomText: prevMeme.bottomText, randomImage:url};
    })
    console.log(randomNumber);
    console.log(url);
  }


  return(
    <main>
      <form className="form">
        <div className="form-inputs">
          <input 
            type="text" 
            placeholder="Top Text"
            onChange={handleInput}
            name="topText"
            value={meme.topText}
          />
          <input 
            type="text" 
            placeholder="Bottom Text"
            onChange={handleInput}
            name="bottomText"
            value={meme.bottomText}
          />
        </div>
        <button onClick={getMemeImage} className="generator-button">Get a new meme image 🖼</button>
      </form>

      <div className="meme-container">
        <h1 className="top-text">
          {meme.topText}
        </h1>
        <h1 className="bottom-text">
          {meme.bottomText}
        </h1>
        <img src={meme.randomImage} alt="" className="meme-image"/>
      </div>
    </main>
  )
}

export default Meme