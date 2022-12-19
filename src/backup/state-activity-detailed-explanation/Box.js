const Box = (props) =>{

  const styles = {
    backgroundColor: props.on ? "black" : "transparent"
  }

  return(
    // handleClick prop would house the function coming from the parent component (App.js)
    <div style={styles} className="box" onClick={props.handleClick}>

    </div>
  );
}

export default Box