
const Buttons = () =>{
  return(
    <div className="button-group">
      <button className="email-button">
        <img src={require('../images/email.png')} alt=""/>
        <p>Email</p>
      </button>
      <button className="linkedin-button">
        <img src={require('../images/linkedin.png')} alt="" />
        <p>LinkedIn</p>
      </button>
    </div>
  );
}

const Info = () => {
  return(
    <div className="info-section">
      <img src={require('../images/profile-picture.jpeg')} alt="" className="profile-picture" />
      <div className="personal-info">
        <h1 className="profile-name">Angelo Santos</h1>
        <h3 className="occupation">Front End Developer</h3>
        <a href="#" className="website-link">test.website</a>
      </div>
      <Buttons/>
    </div>
  );
}

export default Info;