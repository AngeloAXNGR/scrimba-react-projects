// This Code covers complex states with object as the state
import React from "react";

const Card = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  });



  function toggleFavorite(){
    setContact(prevContact => {
      // Similar with the Things example, make use of spread syntax to edit a
      // specific object property of the previousState 
      // Do not do something like isFavorite: !.prevContact.isFavorite 
      // (code above will return an object containing only the isFavorite property as its state)
      return {...prevContact, isFavorite: !prevContact.isFavorite}
    });
  }


  // Setting state from child components using props (done through .isFilled prop)
  const Star = (props) => {
    let starIcon = props.isFilled === true ? "star-filled.png" : "star-empty.png";
    return(
      <img 
        src={require(`../images/${starIcon}`)} 
        className="card-favorite"
        onClick={props.handleClick}
      />
    )
  }

  return(
    <main className="card-container">
      <article className="card">
        <img src={require("../images/user.png")} className="card-image" />
        <div className="card-info">
          {/* handleClick is a custom prop representing eventListeners */}
          {/* state value is passed on isFilled prop */}
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card-name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card-contact">{contact.phone}</p>
          <p className="card-contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default Card;