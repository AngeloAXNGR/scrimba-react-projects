import React from "react";

const ToggleState = () => {
  // **useState Practice**
  // First index represents a variable, second index is a function used to 
  // process value of the first index.
  const [isImportant, setIsImportant] = React.useState(true);

  // second function in the useState should not be called alone (it has to depend on
  // a certain event for it to be run ideally (tldr. run setIsImportant() during click
  // events or any other event listeners))
  function handleClick(){
    setIsImportant(prevState => !prevState);
  }
  return(
    <div className="state">
      <h1 className="state-title">Is state important to know?</h1>
      <div className="state-value" onClick={handleClick}>
        <h1>{isImportant === true ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default ToggleState;