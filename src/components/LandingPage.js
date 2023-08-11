import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const LandingPage = () => {
  return (
    <div>
      <h2>Welcome to Memory Game</h2>
      <Link to="/enter-data">
        <Button type="primary">New Game</Button>
      </Link>

      <Link to="/high-scores">
        <Button type="primary">High Scores</Button>
      </Link>
    </div>
  );
};

export default LandingPage;