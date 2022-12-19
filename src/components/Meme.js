import memesData from '../data/memesData';
import React from 'react';



const Meme = () =>{

  const [meme, setMeme] = React.useState({
    topText: "Shut Up",
    bottomText: "And Take My Money!",
    randomImage: "https://i.imgflip.com/3si4.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage(){
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor((Math.random() * memesArray.length));
    const url = memesArray[randomNumber].url

    setMeme(prevMeme => {
      return {...prevMeme, topText: "Test1", bottomText: "Test2", randomImage:url};
    })
    console.log(randomNumber);
    console.log(url);
  }


  return(
    <main>
      <div className="form">
        <div className="form-inputs">
          <input type="text" placeholder="Top Text"/>
          <input type="text" placeholder="Bottom Text"/>
        </div>
        <button onClick={getMemeImage} className="generator-button">Get a new meme image 🖼</button>
      </div>

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