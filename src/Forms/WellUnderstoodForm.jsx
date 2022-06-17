import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function WellUnderstoodForm () {

    const dispatch = useDispatch()

    const [howWellUnderstood, setHowWellUnderstood] = useState('')

    const handleWellUnderstoodForm = (event) => {
        setHowWellUnderstood(event.target.value);
      }

    const addWellUnderstood = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_WELL_UNDERSTOOD',
            payload: howWellUnderstood
        })
    }

    return (
      <>
      <h2>How well are you understanding the content?</h2>
        <form onSubmit={(event) => addWellUnderstood(event)}>
      <input
        onChange={handleWellUnderstoodForm}
        type='text'
        placeholder='answer here'
        required
      />

      <button type='submit'>Next</button>
    </form>
    </>
    )
}

export default WellUnderstoodForm