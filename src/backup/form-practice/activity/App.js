import React from 'react';
import logo from './logo.svg';
import './App.css';



const App = () => {
  /**
   * Challenge: Connect the form to local state
   * 
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the 
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */

  const [account, setAccount] = React.useState({
    email:"",
    password:"",
    passwordConfirm:"",
    subscription:true
  });
    
  function handleChange(event){
    const {name, value, type, checked} = event.target
    setAccount(prevAccount =>{
      return{ ...prevAccount,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(account.password !== account.passwordConfirm){
      console.log("Passwords does not match")
    }else{
      if(account.subscription === true){
        console.log(account);
        console.log("Thank you for subscribing to our newsletter!")
      }else{
        console.log(account);
      }
    }

  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={handleChange}
          value={account.email}
        />
        <input 
          type="password" 
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={account.password}
        />
        <input 
          type="password" 
          placeholder="Confirm password"
          className="form--input"
          name="passwordConfirm"
          onChange={handleChange}
          value={account.passwordConfirm}
        />
        
        <div className="form--marketing">
            <input
              name="subscription"
              id="okayToEmail"
              type="checkbox"        
              checked={account.subscription}        
              onChange={handleChange}
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button 
            className="form--submit"
        >
            Sign up
        </button>
      </form>
    </div>
  )
}
export default App;

