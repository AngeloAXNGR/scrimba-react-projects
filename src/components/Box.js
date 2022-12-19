import React from "react";
const Box = (props) => {

  //=====================================================================

  /**
   * Challenge: Create state controlling whether
   * this box is "on" or "off". Use the incoming
   * `props.on` to determine the initial state.
   * 
   * Create an event listener so when the box is clicked,
   * it toggles from "on" to "off".
   * 
   * Goal: clicking each box should toggle it on and off.
   */


  // This approach is an example of a derived state (ideally you want 
  // to change state from the parent component is this only changes state
  // within this component)

  // const [on, setOn] = React.useState(props.on);

  // function toggle(){
  //   setOn(prevOn => !prevOn);
  // }

  // const styles = {
  //   backgroundColor : on ? "#222222" : "transparent"
  // }

  //================================================================

  const styles = {
    backgroundColor : props.on ? "#222222" : "transparent"
  }

  return(
     <div style={styles} className="box" onClick={props.handleEvent}></div>
  );
}


export default Box;