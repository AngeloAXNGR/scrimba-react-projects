import React, {Component} from 'react';

export default class Navbar extends Component{
  render(){
    return(
      <nav>
        <div className="left-nav-section">
          <img src="./logo512.png" alt="" className="nav-logo"/>
          <h2>ReactFacts</h2>
        </div>
        <div className="right-nav-section">
          <h2>React Course - Project 1</h2>
        </div>
      </nav>
    );
  }
}