const Card = (props) => {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = 'SOLD OUT'
  }else if(props.item.openSpots !== 0 && props.item.location === "Online"){
    badgeText = ' Available Online'
  }else{
    badgeText = 'Available';
  }

  return(
    <div className="card">
      <h2 className="badge">{badgeText}</h2>
      <img src={require(`../images/${props.item.coverImg}`)} alt="" className="card-image"/>
      <div className="rating">
        <img src={require('../images/star.png')} alt="" className="rating-logo"/>
        <p>{props.item.stats.rating}</p>
        <p className='review-count'>({props.item.stats.reviewCount}) &#183; {props.item.location}</p>
      </div>
      <div className="service-details">
        <p className="service-title">{props.item.title}</p>
        <p className="service-price"><strong>From ${props.item.price}</strong> / person</p>
      </div>
    </div>
  );
}

export default Card;