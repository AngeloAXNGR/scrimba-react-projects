const Journal = (props) =>{
  return(
    <div className="card">
      <img src={props.imageUrl} alt="" className="location-image"/>
      <div className="country-details">
        <div className="maps-link">
          <img src={require('../images/location-icon.png')} alt="" className="pin-logo"/>
          <p className="location">{props.location}</p>
          <a href={props.googleMapsUrl} className="maps-url">View on Google Maps</a>
        </div>
        <div className="country-description">
          <h1 className="card-title">{props.title}</h1>
          <h2 className="date-range">{props.startDate} - {props.endDate}</h2>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Journal
