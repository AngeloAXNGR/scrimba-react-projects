import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Contact from './components/practice-components/Contact';
import Joke from './components/practice-components/Joke';
import jokesData from './data/jokesData.js'
import catData from './data/catData';
import airbnbData from './data/airbnbData';


const App = () => {
  // // Intro to useState and useEffect
  // // number = currentState
  // // setNumber = setState
  // const [elapsedTime, setElapsedTime] = useState(0); // Render Value for each reload
  // function addNumber(){
  //   // prevNumber = currentState value
  //   setElapsedTime(prevNumber => prevNumber + 1);
  // }

  // const [isRunning, setIsRunning] = useState(false);
  // useEffect(()=> {
  //   let timer;
  //   if(isRunning){
  //     timer = setInterval(() => {
  //       setElapsedTime(prevTime => prevTime + 1);
  //     }, 1000);
  //   }
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [isRunning]);



  const jokeElements = jokesData.map(joke => {
    return <Joke
      setup={joke.setup}
      punchline={joke.punchline}
      isPun={joke.isPun}
    />
  });

  const catElements = catData.map(cat =>{
    return(
      <Contact
        img={require(`././images/cat-pictures/${cat.img}`)}
        name={cat.name}
        phone={cat.phone}
        email={cat.email}
      />
    );
  });

  const cards = airbnbData.map(item =>{
    return(
      <Card
        key={item.id}
        item={item} // alternatively: do {...item} then remove .items in Card.js
      />
    );
  })

  return(

    // Use Effect Practice
    // <div className="container">
    //   <button className="add-button" onClick={() => setIsRunning(prevState => !prevState)}>{isRunning ? "Stop":"Start"}</button>
    //   <p>{elapsedTime}</p>
    // </div>

    <div className="container">
      <Navbar/>
      <Hero/>
      <div className="catalog">
        {cards}
      </div>
    </div>

    // <div className="contacts">
    //   {catElements}
    // </div>

    // <div className='jokes'>
    //   {jokeElements}
    // </div>

  );
}
export default App;
