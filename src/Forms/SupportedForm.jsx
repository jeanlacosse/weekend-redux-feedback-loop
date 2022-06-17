import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function HowWellSupported () {

    const dispatch = useDispatch()

    const [howSupported, setHowSupported] = useState('')

    const handleHowWellSupported = (event) => {
        setHowSupported(event.target.value);
      }

    const addComment = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD-HOW-WELL-SUPPORTED',
            payload: howSupported
        })
    }

    return (
      <>
      <h2>How well are you being supported?</h2>
        <form onSubmit={(event) => addComment(event)}>
      <input
        onChange={handleHowWellSupported}
        type='text'
        placeholder='answer here'
        required
      />

      <button type='submit'>Next</button>
    </form>
    </>
    )
}

export default HowWellSupported