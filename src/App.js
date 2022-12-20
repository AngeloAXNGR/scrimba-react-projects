import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';

// State Practice Components
import ToggleState from './state-practice-components/ToggleState';
import Counter from './state-practice-components/Counter';
import Thing from './state-practice-components/Things';
import Card from './state-practice-components/Card';

// State Inheritance Practice Components
import Header2 from './state-inheritance-practice-components/Header2';
import Body from './state-inheritance-practice-components/Body';



const App = () => {

  // State inheritance practice
  const [username, setUsername] = React.useState('A');


  return(

    // <div className="state-practice">
    //   <ToggleState/>
    //   <Counter/>
    //   <Card/>
    //   <Thing/>
    // </div>

    // <div className="state-inheritance-practice">
    //   <Header2 username={username}/>
    //   <Body username={username}/>
    // </div>


    <div className="container">
      <Header/>
      <Meme/>
    </div>

  );
}
export default App;
