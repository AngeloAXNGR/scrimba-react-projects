import logo from './logo.svg';
import './App.css';
import React from 'react';

import boxes from './boxes';
import Box from './Box';

function App() {

  const [squares, setSquares] = React.useState(boxes);
  console.log(squares);

  function addBox(){
    setSquares(prevSquares => {
      // Add new item on array using spread syntax
      return [...prevSquares, 
        {
          id:prevSquares.length+1,
          on:false
        }
      ]
    })
  }

  function toggleBoxColor(id){
    setSquares(prevSquares => {
      // We use map to modify one element in the array of objects (in this case edit "on" property value of on object)
      return prevSquares.map((square) =>{
        // First we scan through the array of objects (square)
        // Second, we find the desired square we are changing its "on" property value through this syntax: return square.id === id
        // where:
        //  - square.id is the property "id" of box element
        // IF square.id === id is TRUE , we create a new object with the modified property "on" value and replace old object (that object whose id property is equal to the id function parameter value)
        // ELSE return other objects whose id is not equal to the function parameter value
        // Do NOTE that map returns a new value so with this approach, we are not directly editing prevSquares. We are creating a new state that is also called prevSquares and returning that instead for
        // our setSquares setter function.
        return square.id === id ? {...square , on : !square.on} : square
      })
    })
  }

  const boxElements = squares.map(square => {
    return(
      <Box
        key={square.id}
        id={square.id}
        on={square.on}
        handleClick={()=>toggleBoxColor(square.id)}
      />
    );
  })

  return (
    <div className="App">
      <header>
        <button onClick={addBox}>Add Box</button>
      </header>
      <div className="boxes">
        {boxElements}
      </div>
    </div>
  );
}

export default App;
