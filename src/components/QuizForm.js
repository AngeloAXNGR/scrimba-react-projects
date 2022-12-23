import { useState , useEffect} from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { nanoid } from "nanoid";

const QuizForm = () => {
  const [questions, setQuestions] = useState(()=>{return []});
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [startGame, setStartGame] = useState(false);

  useEffect(()=>{
    async function getQuestions(){
      const response = await fetch("https://opentdb.com/api.php?amount=2&type=multiple")
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

      setQuestions(revisedData)
    }

    getQuestions();
  },[startGame])


  const Question = (props) =>{
    function selectAnswer(id){
      const questionId = props.id;
      const choiceId = id;
      console.log("Question ID: " + questionId);
      console.log("Choice ID: " + choiceId)
      setQuestions(prevQuestions => {
        return prevQuestions.map((questionItem) =>{
          return questionItem.id === questionId
          ? {...questionItem, choices:lockChoice(id, questionItem.choices)}
          : questionItem
        })
      });

    }

    function lockChoice(id, choices){
      return choices.map(item =>
          {return item.id === id ? {...item, selected:true}: {...item, selected:false}}
        )
    }

    const choices = props.choices.map(choice => 
      <Choices 
        key={choice.id}
        value={ReactHtmlParser(choice.value)}
        getId={()=>selectAnswer(choice.id)}
        selected={choice.selected}
      />
    )

    return(
      <div className="question">
        <h1>{props.question}</h1>
        <div onClick={props.handleClick} className="choices">
          {choices}
        </div>
        <h1>{end ? `Correct Answer: ${props.correctAnswer}` : ReactHtmlParser("&#10240;")}</h1>
      </div>
    )
  }


  const Choices = (props) => {
    const styles = {
      backgroundColor: props.selected ? "#293264" : "white",
      border: props.selected ? "2px solid white" : "2px solid #293264",
      color: props.selected ? "white" : "#293264",
      fontWeight: props.selected ? "bold" : "normal",
    }
    return(
      <div style={styles} className="choice" onClick={props.getId}>{props.value}</div>
    )
  }

  const questionElements = questions.map(question => {
    const parsedQuestion = ReactHtmlParser(question.question)
    return( 
      <Question 
        key={question.id}
        id={question.id}
        question={parsedQuestion} 
        choices={question.choices}
        correctAnswer={question.correctAnswer}
        />
      )
  })

  function checkAnswers(){
    try{for(let i = 0; i < questions.length; i++){
      const selectedAnswer = questions[i].choices.find((choice) => choice.selected === true).value
      const correctAnswer = questions[i].correctAnswer;
      console.log("Your Answer: " + selectedAnswer)
      console.log('Answer: ' + correctAnswer)
      if(selectedAnswer === questions[i].correctAnswer){
        setScore(prevScore => prevScore + 1);
      }
    }
    setEnd(true);}
    catch(err){
      alert('All questions must be answered')
    }
  }

  function restartGame(){
    setStartGame(prevGame => !prevGame)
    setEnd(false);
    setScore(0);
  }
  
  return(
    <div className="quiz-form">
      <div className="questions">{questionElements} </div>
      <div className="result-section">
        {!end && <button className="check-answers" onClick={checkAnswers}>Check Answers</button>}
        {end && <h1>Final Score: {score}/{questions.length}</h1>}
        {end && <button className="check-answers" onClick={restartGame}>Restart</button>}
      </div>
    </div>
  );
}


export default QuizForm