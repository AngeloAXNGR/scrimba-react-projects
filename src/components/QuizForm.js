import { useState , useEffect} from "react";
const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  // https://opentdb.com/api.php?amount=5&type=multiple&encode=url3986
  // https://opentdb.com/api.php?amount=5&type=multiple

  useEffect(()=>{
    async function getQuestions(){
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await response.json();
      const resultArray = data.results;
      let revisedData = resultArray.map(result => {
        const randomizedIndex = Math.floor(Math.random() * result.incorrect_answers.length)
        let choicesArray = result.incorrect_answers
        choicesArray.splice(randomizedIndex, 0, result.correct_answer);
        return {
          question: result.question,
          correctAnswer: result.correct_answer,
          choices: choicesArray,
        }
      })

      setQuestions(revisedData)
    }

    getQuestions();
  },[])

  const Question = (props) =>{
    return(
      <div className="question">
        <h1>{props.question}</h1>
      </div>
    )
  }

  const questionElements = questions.map(question => {
    return <Question question={question.question}/>
  })
  
  console.log(questions)
  return(
    <div className="quiz-form">
      {questionElements}  
    </div>
  );
}


export default Quiz