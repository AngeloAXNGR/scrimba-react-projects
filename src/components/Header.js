const Header = () =>{
  return(
    <nav className="header">
      <div className="left-nav-section">
        <img src={require("../images/troll-face.png")} alt="" className="header-icon"/>
        <h1>Meme Generator</h1>
      </div>
      <div className="right-nav-section">
        <h1>React Course - Project 3</h1>
      </div>
    </nav>
  );
}

export default Header;