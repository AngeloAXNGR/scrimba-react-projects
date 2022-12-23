import React from "react"
import QuizForm from "./components/QuizForm";



export default function App() {

	const [hasStarted, setHasStarted] = React.useState(true);


	function toggleScreen(){
		setHasStarted(prevStarted => {return !prevStarted});
	}


	const StartScreen = (props) =>{
		return(
			<div className="start-screen">
				<h1>Quiz App</h1>
				<button className="start-button" onClick={props.handleClick}>Start</button>
			</div>
		);
	}
	
	return (
		<main>
			{hasStarted ? <StartScreen handleClick={toggleScreen}/> : <QuizForm/>}
		</main>
	)
}