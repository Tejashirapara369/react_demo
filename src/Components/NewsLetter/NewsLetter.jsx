import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='news-letter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to our News-Letter and stay updated.</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
