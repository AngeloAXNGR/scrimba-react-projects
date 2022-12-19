import React from 'react';
import logo from './logo.svg';
import './App.css';





const App = () => {
  const [firstName, setFirstName] = React.useState('');
  return(
    <form>
      <input 
        type="text" 
        placeholder='First Name'
        
      />
    </form>
  )
}
export default App;

