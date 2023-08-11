import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HighScores = () => {
    const [getInputs, setGetInputs] = useState([]);

    useEffect(() => {
        // Fetch userInputs from localStorage
        const getInputsFromStorage = JSON.parse(localStorage.getItem('userInputs'));
        setGetInputs(getInputsFromStorage);
    }, []);
    

    return (  
        <div>
            <h2>High Scores</h2>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {getInputs.map((input, index) => (
                    <tr key={index}>
                        <td>{input.name}</td>
                        <td>{input.score}</td>
                        <td>{input.difficulty}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
                        
            <Link to="/enter-data">
                <button>New Game</button>
            </Link>
        </div>
    );
}
 
export default HighScores;