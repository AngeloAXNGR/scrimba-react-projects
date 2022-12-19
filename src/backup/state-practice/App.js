import React from 'react';
import logo from './logo.svg';
import './App.css';
import boxes from './boxes';
import Box from './components/Box';




const App = (props) => {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */

  // const [squares, setSquares] = React.useState(boxes);

  // Challenge: use a ternary to determine the backgroundColor.
  // If darkMode is true, set it to #222222
  // If darkMode is false, set it to #cccccc
  // const styles = {
  //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  // };

  // const squareElements = squares.map(square => {
  //   // Pass styles prop in style
  //   return <div style={styles} className="box" key={square.id}></div>
  // });


  /**
   * Challenge part 2:
   * 1. Create a separate component called "Box" and
   *    replace the `div` above with our <Box /> components
   * 2. Pass the Box component a prop called `on` with the
   *    value of the same name from the `boxes` objects
   * 3. In the Box component, apply dynamic styles to determine
   *    the backgroundColor of the box. If it's `on`, set the
   *    backgroundColor to "#222222". If off, set it to "none"
   */
  
  const [squares, setSquares] = React.useState(boxes);

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   * 
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map((square) =>{
        // Toggles on/off of specific square (id is the basis for finding that square)
        // Object spread is used to create new object and replace old object with new object
        // This approach will not update the state directly
        return square.id === id ? {...square, on: !square.on} : square
      })
    });

  }

  const squareElements = squares.map(square => {
    return(
      <Box 
      key={square.id}
      id={square.id}
      on={square.on} 
      handleEvent={() => toggle(square.id)}/>
    );
  })

  return (
    <main>
        <h1>{squareElements}</h1>
    </main>
  );
}
export default App;

