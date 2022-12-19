import React from 'react';
import logo from './logo.svg';
import './App.css';



const App = () => {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    emailAddress:"",
    comments:"",
    isFriendly:true,
    employment:"",
    favColor:""
  });

  function handleChange(event){
    // display form input name and value.
    // Note events are read in each keystroke
    // console.log(event.target.name, event.target.value);


    const {name, value, type, checked} = event.target

    setFormData(prevFormData => {
      return {...prevFormData,
        // square brackets signifies a computed value
        // We need to do this so that name (form inputs) changes dynamically
        // whenever we fill a value corresponding to target.name form input
        // Ternary logic, am I currently editing in the checkbox for the form?
        // If yes, have event listener be focusing on the checkbox input
        // Otherwise, check for values in text input.
      [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function handleSubmit(event){
    // Stop rerender app after form submit
    event.preventDefault();
    console.log(formData);
  }


  return(
    <form onSubmit={handleSubmit}>
      {/* add value property to turn uncontrolled form component into controlled component */}
      <input
        name="firstName"
        type="text" 
        placeholder='First Name'
        onChange={handleChange}
        value={formData.firstName}
      />

      <input
        name="lastName"
        type="text" 
        placeholder='Last Name'
        onChange={handleChange}
        value={formData.lastName}
      />

      <input
        name="emailAddress"
        type="email" 
        placeholder='Email Address'
        onChange={handleChange}
        value={formData.emailAddress}
      />

      <textarea 
        name="comments" 
        id="" 
        cols="30" 
        rows="10"
        onChange={handleChange}
        value={formData.comments}
      />

      <div className="form-row">
        <input
          name="isFriendly"
          type="checkbox"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
      <br />

      <fieldset>
        <legend>Current employment status</legend>
        
        <div className="radio-form-rows">
          <input
            type="radio"
            id="unemployed"
            onChange={handleChange}
            name="employment"
            checked={formData.employment === "unemployed"}
            value="unemployed"
          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>


        <div className="radio-form-rows">
          <input
            type="radio"
            id="part-time"
            onChange={handleChange}
            name="employment"
            checked={formData.employment === "part-time"}
            value="part-time"

          />
          <label htmlFor="part-time">Part-time</label>
        </div>


        <div className="radio-form-rows">
          <input
            type="radio"
            id="full-time"
            onChange={handleChange}
            name="employment"
            checked={formData.employment === "full-time"}
            value="full-time"
          />
          <label htmlFor="full-time">Full-time</label>
        </div>
      </fieldset>


      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>

    <button type="submit">Submit</button>
</form>
  )
}
export default App;

