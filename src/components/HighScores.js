import React from 'react';


const HighScores = ({ userInputs }) => {

    

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
                    {userInputs.map((input, index) => (
                    <tr key={index}>
                        <td>{input.name}</td>
                        <td>{input.score}</td>
                        <td>{input.difficulty}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default HighScores;