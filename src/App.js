import React from "react"
import QuizForm from "./components/QuizForm";
import { nanoid } from "nanoid"



export default function App() {

	const [hasStarted, setHasStarted] = React.useState(false);


	function toggleScreen(){
		setHasStarted(prevStarted => {return !prevStarted});
	}
	
	return (
		<main>
			<QuizForm/>
		</main>
	)
}