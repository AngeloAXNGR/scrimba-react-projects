const Header = (props) =>{
  return(
    <nav className="header">
      <img src={require(`../images/${props.icon}`)} alt=""  className="header-icon"/>
      <h1 className="nav-title">my travel journal</h1>
    </nav>
  );
}

export default Header