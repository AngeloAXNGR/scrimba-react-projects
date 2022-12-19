// This Code covers complex states with array as the state

import React from "react";
const Thing = () =>{

const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addThing(){
    console.log(thingsArray);
    setThingsArray(prevThingsArray =>{
      // Alternative to .push method in arrays (this is the recommended approach)
      // second parameter is the item you are trying to push into the prevThingsArray
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    });
  }

  const thingElements = thingsArray.map(item => <p key={item}>{item}</p>)

  return(
    <div>
      <button onClick={addThing}>Add Item</button>
      {thingElements}
    </div>
  )
}

export default Thing;