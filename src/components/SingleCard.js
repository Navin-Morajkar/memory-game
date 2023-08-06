import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    
    const handleClick= () =>{
        if (!disabled){
            handleChoice(card)
        }        
    }
    return (  
        <div className="card">
            <div className={flipped ? "flipped" : ""}>              
              <img className="front" 
                   src={card.src} 
                   alt="number-photo">
              </img>
              <img className="back" 
                   onClick={handleClick} 
                   src="/images/cover.jpeg" 
                   alt="cover-photo">
              </img>
            </div>
        </div>
    );
}