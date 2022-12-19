import React from "react";

const Header2 = (props) =>{
  return(
    <header>
      <p>Current user: {props.username}</p>
    </header>
  );
}

export default Header2;