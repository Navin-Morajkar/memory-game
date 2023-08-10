import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterData = ({updateUserInputs }) => {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const userInput = { name, difficulty, score };

      updateUserInputs(userInput);
  
      // Clear the input fields after submission
      setName('');
      setDifficulty('');
      setScore(0);

      //localStorage.setItem('userInputs', JSON.stringify(userInputs));
        
      // Navigate to the "/game" route after submitting the form
      navigate('/game');
    };
    
    // useEffect(() => {
    //     console.log("test");
    //     localStorage.setItem('userInputs', JSON.stringify(userInputs));
    // }, [userInputs]);      

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
        </div>
    );
}
 
export default EnterData;