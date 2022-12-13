import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App = () => {
  return(
    <div className="container">
      <Navbar/>
      <Main/>
    </div>
  );
}
export default App;
