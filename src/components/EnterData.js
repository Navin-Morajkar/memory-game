import React, { useState, useEffect } from 'react';
import HighScores from './HighScores';
import { Link } from 'react-router-dom';

const EnterData = ({ userInputs, setUserInputs }) => {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [score, setScore] = useState(0);
    //const [userInputs, setUserInputs] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userInput = { name, difficulty, score };
      setUserInputs((prevUserInputs) => [...prevUserInputs, userInput]);
  
      // Clear the input fields after submission
      setName('');
      setDifficulty('');
      setScore(0);
    };
  
    useEffect(() => {
      // Store the updated userInputs array in localStorage whenever it changes
      localStorage.setItem('userInputs', JSON.stringify(userInputs));
  
      // Log the updated userInputs array after the state has been updated
      //console.log(userInputs);
    }, [userInputs]);   

    return (  
        <div>

            <h2>Enter Data </h2>

            <form onSubmit={handleSubmit}>
                <label>Enter your name: </label>
                <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <br />

                <label>Enter difficulty: </label>
                <input
                    required
                    type="number"
                    id="numberInput"
                    min={2} max={50}
                    step={2}
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    
                />
                <button>Submit</button>
                
            </form>
            
            <Link to="/high-scores">
                <button>View High Scores</button>
            </Link>
            {/* <p>{name}</p>
            <p>{difficulty}</p> */}
            
        </div>
    );
}
 
export default EnterData;