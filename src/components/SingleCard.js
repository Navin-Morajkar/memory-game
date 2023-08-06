import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

    const handleClick= () =>{
        handleChoice(card)
    }
    return (  
        <div className="card">
            <div>              
              <img className="front" src={card.src} alt="number-photo"></img>
              <img className="back" onClick={handleClick} src="/images/cover.jpeg" alt="cover-photo"></img>
            </div>
        </div>
    );
}