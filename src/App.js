import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"



export default function App() {



    /**
     * Challenge:
     * 
     * Write a function (allNewDice) that returns an array 
     * of 10 random numbers between 1-6 inclusive.
     * 
     * Log the array of numbers to the console for now
     */

    /**
     * Challenge: Update the array of numbers in state to be
     * an array of objects instead. Each object should look like:
     * { value: <random number>, isHeld: false }
     * 
     * Making this change will break parts of our code, so make
     * sure to update things so we're back to a working state
     */

    function generateNewDie(){
        return {value: Math.floor(Math.random() * 6) + 1, 
                isHeld:false,
                id:nanoid()}
    }

    function allNewDice(){
        let newDice = []
        for (let i = 0; i < 10; i++){
            newDice.push(generateNewDie())
        }

        // console.log(newDice);
        return newDice
    }


    /**
     * Challenge:
     * 
     * Create state to hold our array of numbers. (Initialize
     * the state by calling our `allNewDice` function so it 
     * loads all new dice as soon as the app loads)
     * 
     * Map over the state numbers array to generate our array
     * of Die elements and render those in place of our
     * manually-written 10 Die elements.
     */


    const [dice, setDice] = React.useState(allNewDice())



    /**
     * Challenge: Add conditional styling to the Die component
     * so that if it's held (isHeld === true), its background color
     * changes to a light green (#59E391)
     * 
     * Remember: currently the Die component has no way of knowing
     * if it's "held" or not.
     */

    const dieElements = dice.map(die => {
        return <Die 
                key={die.id} 
                value={die.value}
                isHeld={die.isHeld}
                holdDice={() => holdDice(die.id)}
                />
    })



    /**
     * Challenge: Create a `Roll Dice` button that will re-roll
     * all 10 dice
     * 
     * Clicking the button should generate a new array of numbers
     * and set the `dice` state to that new array (thus re-rendering
     * the array to the page)
     */


    /**
     * Challenge: Update the `rollDice` function to not just roll
     * all new dice, but instead to look through the existing dice
     * to NOT role any that are being `held`.
     * 
     * Hint: this will look relatively similiar to the `holdDice`
     * function below. When creating new dice, remember to use
     * `id: nanoid()` so any new dice have an `id` as well.
     */
    function rollDice(){
        setDice(prevDice =>{
            return prevDice.map((die) => {
                // Scan through prevDice array
                // If prevDice Array element isHeld property = true, don't reroll to a new number
                // else create a new element with rerolled numbers and replace the old element with
                //  that new element
                return die.isHeld ? die : generateNewDie()
            })
        })
    }



    /**
     * Challenge: Create a function `holdDice` that takes
     * `id` as a parameter. For now, just have the function
     * console.log(id).
     * 
     * Then, figure out how to pass that function down to each
     * instance of the Die component so when each one is clicked,
     * it logs its own unique ID property. (Hint: there's more
     * than one way to make that work, so just choose whichever
     * you want)
     * 
     */
    function holdDice(id){
        setDice(prevDice => {
            return prevDice.map((die) => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die
            })
        })
    }


    /**
     * Challenge:
     * 1. Add new state called `tenzies`, default to false. It
     *    represents whether the user has won the game yet or not.
     * 2. Add an effect that runs every time the `dice` state array 
     *    changes. For now, just console.log("Dice state changed").
     */

    const [tenzies, setTenzies] = React.useState(false);



    /**
     * Challenge: Check the dice array for these winning conditions:
     * 1. All dice are held, and
     * 2. all dice have the same value
     * 
     * If both conditions are true, set `tenzies` to true and log
     * "You won!" to the console
     */

    // Reason why useEffect is being utilized: 
    // - Because we are trying to sync the state between dice and tenzies
    React.useEffect(()=>{
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        const allSameValue = dice.every(die => die.value === firstValue)

        if(allHeld && allSameValue){
            setTenzies(true)
            console.log('Game Won!');
        }
    },[dice])


    function resetGame(){
        setDice(allNewDice());
        setTenzies(false);
    }


    return (
        <main>
            <div className="board">
                <div className="intro">
                    <h1>Tenzies</h1>
                    <p>
                        Roll until all dice are the same. Click each to die to freeze it
                        at its current value between rolls
                    </p>
                </div>
                <div className="die-component">
                    {dieElements}
                </div>

                {!tenzies && <button className="roll-dice" onClick={rollDice}>Roll</button>}
                {tenzies && <button className="roll-dice" onClick={resetGame}>Play Again</button>}
            </div>
        </main>
    )
}
