import logo from './logo.svg';
import './App.css';
import React, {Component, useState, useEffect} from 'react';
import Header from './components/Header';
import Journal from './components/Journal';
import data from './data/data';

const travelCards = data.map(item =>{
  return(
    <Journal
      {...item}
    />
  )
})

const App = () => {

  return(
    <div className="container">
      <Header
        icon="globe-icon.png"
      />

      <div className="journals">
        {travelCards}
      </div>
    </div>

  );
}
export default App;
