import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  // TASK 4 - Create a side effect that runs only after first render.
  useEffect(() => {
    console.log('I run after the first DOM surgery ONLY')
  }, []);

  // TASK 5 - Create a side effect that runs only after first render
  // and puts a 'click' event handler on document.
  // See what happens if we don't clean up.
  useEffect(() => {
    const listener = event => {
      console.log('You clicked the document')
    }
    document.addEventListener('click', listener)
  }, [])

  // TASK 6 - Create a side effect that runs after every render.
  useEffect(() => {
    console.log('After first DOM surgery... and ALL subsequent DOM surgeries')
  })

  // TASK 7 - Create a side effect that runs when a particular variable changes.
  useEffect(() => {
    console.log(`The friendId changed: ${friendId}`)
  }, [friendId])

  // TASK 8 - Use an effect to fetch the details of the current friend.
  // The URL should end up looking like `http://localhost:4000/friends/1?api_key=xyz`
  // On success, shove the details of the friend in `details` slice of state

  // console.log('Details is rendering ' + friendId)

  if (!details) {
    return `No Details for friend with id ${friendId}`
  }
  return (
    <div className='container'>
      <h2>Details:</h2>
      <p>{details.name} is {details.age}</p>
      <p>email is {details.email}</p>
      {name} likes:
      <ul>
        {
          details.likes.map((like, idx) => <li key={idx}>{like}</li>)
        }
      </ul>
      <button onClick={close}>Close</button>
    </div>
  )
}
