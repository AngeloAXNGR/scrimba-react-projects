import React from "react";

const Jokes = (props) => {
  const [isShown, setIsShown] = React.useState(false);

  function toggle(){
    console.log(isShown);
    setIsShown(prevShown => {
      return !prevShown
    })
  }

  // Conditional Rendering
  return(
    <div className="joke-card">
      {props.setup && <h3>{props.setup}</h3>}
      {/* If both isShown and <p></p> are thruthy the code will display the paragraph*/}
      {/* The way && works is if the first expression evaluates to false, the succeeding code will not run */}
      {/* In this case, isShown is evaluated first and if its false, paragraph won't be rendered */}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
    </div>
  );
}

export default Jokes