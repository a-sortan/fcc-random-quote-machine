import { useState } from 'react'
import Card from './components/Card.jsx'
import { getRandomQuote } from './mockup-quotes.js';
import './App.css'

function App() {
  const colors = ["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"]
  const [quote, setQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState(colors[0])
  const getRandomColor = () => {
    let idx = Math.floor((Math.random() * colors.length));
    return colors[idx];
  }
  const handleQuoteButtonClick = () => {
    
    setQuote(getRandomQuote());
    console.log("getRandomColor ", getRandomColor());
    setBackgroundColor(getRandomColor())
  };
  return (
    <div className='app-container' style={{backgroundColor:backgroundColor}}>
      <Card 
        quote={quote} 
        cardStyle={{backgroundColor:backgroundColor}} 
        quoteStyle={{color:backgroundColor}} 
        handleQuoteButtonClick={handleQuoteButtonClick} 
      />
    </div>
  )
}

export default App
