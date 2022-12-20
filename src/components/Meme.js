import React from 'react';



const Meme = () =>{
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState([])



    /**
   * Challenge: 
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   * 
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   * 
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   * 
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  /**
  useEffect takes a function as its parameter. If that function
  returns something, it needs to be a cleanup function. Otherwise,
  it should return nothing. If we make it an async function, it
  automatically retuns a promise instead of a function or nothing.
  Therefore, if you want to use async operations inside of useEffect,
  you need to define the function separately inside of the callback
  function, as seen below:
  */
  React.useEffect(()=>{
    async function getMemes(){
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json();
      // Saving fetched data into a state
      setAllMemeImages(data.data.memes);
    }

    getMemes();
    console.log('test');

    // Clean up function (optional function, can be removed)
    return () =>{

    }
  }, []) // Don't need a specific dependency since I only need to fetch once

  console.log(allMemeImages)

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
    const memesArray = allMemeImages
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