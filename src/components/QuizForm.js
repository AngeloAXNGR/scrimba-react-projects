import { useState , useEffect} from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { nanoid } from "nanoid";

const QuizForm = () => {
  const [questions, setQuestions] = useState(()=>{return []});

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
    function lockChoice(id){
      const questionId = props.id;
      const choiceId = id;
      console.log("Question ID: " + questionId);
      console.log("Choice ID: " + choiceId)
      setQuestions(prevQuestions => {
        return prevQuestions.map((questionItem) =>{
          return questionItem.id === questionId
          ? {...questionItem, choices:test(id, questionItem.choices)}
          : questionItem
        })
      });

    }

    function test(id, choices){
      console.log("function ran");
      console.log(id);
      console.log(choices);
      return choices.map(item =>
          {return item.id === id ? {...item, selected:true}: {...item, selected:false}}
        )
    }

    const choices = props.choices.map(choice => 
      <Choices 
        key={choice.id}
        value={choice.value}
        getId={()=>lockChoice(choice.id)}
        selected={choice.selected}
      />
    )
    return(
      <div className="question">
        <h1>{props.question}</h1>
        <div onClick={props.handleClick} className="choices">
          {choices}
        </div>
      </div>
    )
  }


  const Choices = (props) => {
    const styles = {
      backgroundColor: props.selected ? "red" : "white",
      border: props.selected ? "none" : "2px solid #293264;"
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
        />
      )
  })


  function checkAnswers(){
    console.log(questions);
  }
  
  console.log(questions)
  return(
    <div className="quiz-form">
      <div className="questions">{questionElements} </div>
      <button className="check-answers" onClick={checkAnswers}>Check Answers</button>
    </div>
  );
}


export default QuizForm