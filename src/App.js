import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Info from './components/Info';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="container">
      <Info/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;
