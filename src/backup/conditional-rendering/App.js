import React from 'react';
import logo from './logo.svg';
import './App.css';


import jokesData from './jokesData';
import Jokes from './Jokes';

const jokeElements = jokesData.map(joke =>{
  return(
    <Jokes
      key={joke.setup}
      setup={joke.setup}
      punchline={joke.punchline}
    />
  );
})




const App = () => {
  const [messages, setMessages] = React.useState([2,2]);

  return(
    // <div className="main">
    //   {jokeElements}
    // </div>



  /**
   * Challenge:
   * - Only display the <h1> below if there are unread messages
   */
    // <div>
    //   {messages.length > 0  && <h1>You have {messages.length} messages!</h1>}
    // </div>


    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */

    <div>
      <h1>
        {messages.length === 0 ? "You're all caught up!":
         `You have ${messages.length} unread
         ${messages.length === 1 ? "message." : "messages."}`}   
      </h1>
    </div>
  )
}
export default App;

