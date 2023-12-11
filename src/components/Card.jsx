import './Card.css';

function QuoteButton(props) {
  return (
    <button style={props.style} onClick={props.handleClick}>
      Change quote
    </button>
  )
}

function Quote(props) {
  let quote = props.quote;
  return (
    <blockquote className="blockquote" style={props.style} >
      <p id="text" ><i className="bi bi-quote"></i> {quote.quote}</p>
      <footer id="author" className="blockquote-footer">- {quote.author} </footer>
    </blockquote>
  )
}

function Card(props){
  let quote = props.quote;
  return (
    <div id="quote-box" className="card" >
      <div className="card-body">
        <Quote quote={quote} style={props.quoteStyle}/>
      </div>
      <div className="card-footer">
        <div className='social-media' >  
          <a href="twitter.com/intent/tweet" target="_blank"  id="tweet-quote" style={props.cardStyle} className="btn"><i className="bi bi-twitter"></i> Twitter</a>
          <a href="#" target="_blank" id="new-quote" style={props.cardStyle} className="btn" ><i className="bi bi-reddit"></i> Reddit</a>
        </div>
        < QuoteButton style={props.cardStyle} handleClick={props.handleQuoteButtonClick}/>
      </div>
    </div>
  )
}

export default Card;