import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
const QuoteSection = () => {
  return (
    <div className='section quote'>
        <p className="quote-text">
            <FontAwesomeIcon icon={faQuoteLeft} />
            Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories.
             It's about sharing. It's about honesty. It's about Identity.
        </p>
        <p className="quote-author">Louise Fresco</p>
    </div>
  )
}

export default QuoteSection