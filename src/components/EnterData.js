import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HighScores from './HighScores';
import { Link } from 'react-router-dom';

const EnterData = ({ userInputs, setUserInputs }) => {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
    //const [userInputs, setUserInputs] = useState([]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userInput = { name, difficulty, score };
      setUserInputs((prevUserInputs) => [...prevUserInputs, userInput]);

      // Navigate to the "/game" route after submitting the form
      navigate('/game');
  
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
                    min={1} max={25}
                    step={1}
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