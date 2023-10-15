import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h2>Welcome to Memory Game</h2>
      <Link to="/enter-data">
        <button type="primary">New Game</button>
      </Link>
      <br />
      <br />

      <Link to="/high-scores">
        <button type="primary">High Scores</button>
      </Link>
    </div>
  );
};

export default LandingPage;