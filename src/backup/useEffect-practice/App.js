import logo from './logo.svg';
import './App.css';
import React from 'react';




const App = () => {

  // Making API Calls
  const [starWarsData ,setStarWarsData] = React.useState({});

  console.log("Component Rendered");



  // first Parameter is a callback function (this is where you put side effect codes)
  // such as calling data from an API
  // second Parameters takes in a dependency array
  // If the dependency array is empty, effect activates only once
  // React.useEffect(()=>{
  //   // Side effects code
  //   console.log("Effect Ran")
  //   fetch("https://swapi.dev/api/people/1")
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [])





/**
 * Challenge: re-write the useEffect
 * It should run any time `count` changes
 * For now, just console.log("Effect function ran")
 */

  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    console.log('Effect function ran');
  },[]);

  /**
   * Quiz:
   * 1. What will happen if I put back our Star Wars API call
   *    into the effect function?
   * 2. How will the useEffect be different if I use 
   *    setStarWarsData() instead of console.log()
   * 3. What SHOULD be in our dependencies array in this case?
   */
  // Answer 1: With count as its dependency, this will run everytime 
  // you click on the button

  // Answer 2: Api call will be made which then updates starWarsData state 
  // (causing a rerender) for as many as you want if you click the button 
  // (which updates the count dependency)

  // Answer 3: Assuming that what we are doing is simply making an API call, 
  //dependency array should be left empty

  // React.useEffect(()=>{
  //   console.log("Effect Ran")
  //   fetch("https://swapi.dev/api/people/1")
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // },[])




  /**
   * Challenge: Combine `count` with the request URL
   * so pressing the "Get Next Character" button will
   * get a new character from the Star Wars API.
   * Remember: don't forget to consider the dependencies
   * array!
   */
    
  React.useEffect(function() {
    console.log("Effect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
  }, [count])
  
  return(

    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>

  );
}
export default App;
