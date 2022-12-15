const Joke = (props) => {
    return(
      <div className="joke" style={{background: props.isPun ? "Green":"White"}}>
        {/* Exclude adding setup h1 if props.setup is false */}
        {props.setup && <h1>Question: {props.setup}</h1>}
        <h1>Joke: {props.punchline}</h1>
      </div>
    );
  }


export default Joke;