import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);



    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */


  // prevCount refers to previous state counter value 
  // this is better practice than just saying: setCounter(counter + 1);  
  const add = () =>{
    setCount(prevCount => {return prevCount + 1});
  }

  const minus = () =>{
    setCount(prevCount => {return prevCount - 1});
  }



  // Passing state values as props
  const Count = (props) =>{
    return(
      <div className="counter--count">
          <h1>{props.number}</h1>
      </div>
    );
  }


  return(
    <div className="counter">
      <button className="counter--minus" onClick={minus}>–</button>
        <Count number={count}/>
      <button className="counter--plus" onClick={add}>+</button>
    </div>
  );
}


export default Counter;