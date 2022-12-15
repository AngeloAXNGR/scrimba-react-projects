import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Journal from './components/Journal';
import data from './data/data';

const App = () => {

  console.log(data);

  return(
    <div className="container">
      <Journal/>
    </div>

  );
}
export default App;
