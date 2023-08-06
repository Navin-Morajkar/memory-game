import { Button, Space} from 'antd';
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages= [
  {"src" : "/images/1.png"},
  {"src" : "/images/2.png"},
  {"src" : "/images/3.png"},
  {"src" : "/images/4.png"},
  {"src" : "/images/5.png"},
  {"src" : "/images/6.png"},
  {"src" : "/images/7.png"},
  {"src" : "/images/8.png"}
]

function App() {
  
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //Shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages,...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id:Math.random() }))
      //.map((card) => ({ id: Math.random(), value: card }));
      
    setCards(shuffledCards)
    setTurns(0)
  }

  //console.log(cards,turns)

  //Choice
  const handleChoice = (card) => {
    //console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //Compare cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src) {
        console.log("Match")
        resetChoice()
      }
    }

  }, [choiceOne, choiceTwo])

  //reset choices and add nos of moves
  const resetChoice = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      
      <h2>Memory Game</h2>
      <Space wrap>
        <Button type="primary" onClick={shuffleCards}>New Game</Button>
        
      </Space>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
            handleChoice={handleChoice} 
          />
        ))}
      </div>
      
    </div>
   
  );
}

export default App;
