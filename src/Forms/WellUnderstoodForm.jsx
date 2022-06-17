import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function WellUnderstoodForm () {

    const dispatch = useDispatch()

    const [howWellUnderstood, setHowWellUnderstood] = useState('')

    const handleComments = (event) => {
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
        <form onSubmit={(event) => addWellUnderstood(event)}>
      <input
        onChange={handleComments}
        type='text'
        placeholder='Comments'
      />

      <button type='submit'>Next</button>
    </form>
    )
}

export default WellUnderstoodForm