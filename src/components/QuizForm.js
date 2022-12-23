import { useState , useEffect} from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { nanoid } from "nanoid";

const QuizForm = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    async function getQuestions(){
      const response = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await response.json();
      const resultArray = data.results;
      let revisedData = resultArray.map(result => {
        const randomizedIndex = Math.floor(Math.random() * result.incorrect_answers.length)
        let choicesArray = result.incorrect_answers
        choicesArray.splice(randomizedIndex, 0, result.correct_answer);

        let selection = []
        for (let i = 0; i < choicesArray.length; i++){
          selection.push({id:nanoid(), value:choicesArray[i],selected:false})
        }

        return {
          id: nanoid(),
          question: result.question,
          correctAnswer: result.correct_answer,
          choices: selection,
        }
      })

      // console.log(test);
      setQuestions(revisedData)
    }

    getQuestions();
  },[])

  const Question = (props) =>{
    const choices = props.choices.map(choice => <div className="choice">{choice.value}</div>)
    return(
      <div className="question">
        <h1>{props.question}</h1>
        <div className="choices">
          {choices}
        </div>
      </div>
    )
  }

  const questionElements = questions.map(question => {
    const parsedQuestion = ReactHtmlParser(question.question)
    return <Question question={parsedQuestion} choices={question.choices}/>
  })
  
  console.log(questions)
  return(
    <div className="quiz-form">
      <div className="questions">{questionElements} </div>
      <button className="check-answers">Check Answers</button>
    </div>
  );
}


export default QuizForm