import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MemoryGame from "./components/MemoryGame";
import HighScores from "./components/HighScores";
import EnterData from "./components/EnterData";

function App() {
  const [userInputs, setUserInputs] = useState([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/enter-data"
            element={
              <EnterData
               // userInputs={userInputs}
               // setUserInputs={setUserInputs}
                updateUserInputs={(newUserInput)=>{
                  setUserInputs((prevUserInputs) => [...prevUserInputs, newUserInput])
                }}
              />
            }
          />
          <Route
            path="/game"
            element={
              <MemoryGame
                userInputs={userInputs}
                setUserInputs={setUserInputs}
              />
            }
          />
          <Route path="/high-scores" element={<HighScores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
