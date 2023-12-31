import React, { useState, useEffect } from "react";
import { Space } from "antd";
import { Link } from "react-router-dom";
import SingleCard from "./../components/SingleCard";
import "./../App.css";
import { cardImages } from "./../constants/constants";

const defaultDifficulty = 8;

const MemoryGame = ({ userInputs, setUserInputs }) => {
  // Get the latest user input (difficulty) from the array
  const latestUserInput = userInputs[userInputs.length - 1];
  const difficulty = latestUserInput
    ? latestUserInput.difficulty
    : defaultDifficulty;

  // Create a new array of card images based on the entered difficulty
  const selectedCardImages = cardImages.slice(0, difficulty);

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setdisabled] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);

  //Shuffle
  const shuffleCards = () => {
    setChoiceOne(null);
    setChoiceTwo(null);

    const shuffledCards = [...selectedCardImages, ...selectedCardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //Choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //Compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setdisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        //console.log("Match")
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoice();
      } else {
        setTimeout(() => resetChoice(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0) {
      // Check if all pairs are matched (game ended)
      const allPairsMatched = cards.every((card) => card.matched);

      if (allPairsMatched) {
        // Update the score in the latest userInputs entry
        setUserInputs((prevUserInputs) => {
          const updatedUserInputs = [...prevUserInputs];
          const latestInput = updatedUserInputs[updatedUserInputs.length - 1];
          latestInput.score = turns;
          return updatedUserInputs;
        });
        // Set the gameEnded state to true
        localStorage.setItem("userInputs", JSON.stringify(userInputs));
        setGameEnded(true);
      }
    }
  }, [cards]);

  useEffect(() => {
    shuffleCards();
  }, []);

  //Reset choices and add nos of moves
  const resetChoice = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setdisabled(false);
  };

  return (
    <div className="game">
      <h2>Memory Game</h2>

      <Space wrap>
        <button type="primary" onClick={shuffleCards}>
          Shuffle Cards
        </button>
        <Link to="/high-scores">
          <button>View High Scores</button>
        </Link>
      </Space>

      {gameEnded ? (
        <p>Game Over! Your score: {turns}</p>
      ) : (
        <>
          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled} /* || gameEnded*/
              />
            ))}
          </div>
          <p>Turns: {turns}</p>
        </>
      )}
    </div>
  );
};

export default MemoryGame;
