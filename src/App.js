import { Button, Space} from 'antd';
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages= [
  {"src" : "/images/1.png", matched: false},
  {"src" : "/images/2.png", matched: false},
  {"src" : "/images/3.png", matched: false},
  {"src" : "/images/4.png", matched: false},
  {"src" : "/images/5.png", matched: false},
  {"src" : "/images/6.png", matched: false},
  {"src" : "/images/7.png", matched: false},
  {"src" : "/images/8.png", matched: false}
]

function App() {
  
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setdisabled] = useState(false)

  //Shuffle
  const shuffleCards = () => {
    
    setChoiceOne(null)
    setChoiceTwo(null)

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
      setdisabled(true)

      if(choiceOne.src === choiceTwo.src) {
        //console.log("Match")
        setCards(prevCards => {
          return prevCards.map(card =>{
            if (card.src === choiceOne.src) {
              return {...card, matched:true}
            } else {
              return card
            }
          })
        })
        resetChoice()
      } else{
        //console.log("No Match")
        setTimeout(() => resetChoice(), 1000)
      }
    }

  }, [choiceOne, choiceTwo])

  console.log(cards)

  //reset choices and add nos of moves
  const resetChoice = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setdisabled(false)
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
            flipped= {card === choiceOne || card === choiceTwo || card.matched}
            disabled = {disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
      
    </div>
   
  );
}

export default App;
