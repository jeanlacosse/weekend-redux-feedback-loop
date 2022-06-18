import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';



function WellUnderstoodForm() {

  const dispatch = useDispatch()
  const history = useHistory();

  const [howWellUnderstood, setHowWellUnderstood] = useState(5)

  const addWellUnderstood = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_WELL_UNDERSTOOD',
      payload: howWellUnderstood
    })

    history.push('/well-supported');
  }

  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={(event) => addWellUnderstood(event)}>
        <label htmlFor="">
          Rating
          <input
            type="range"
            min='0'
            max='10'
            placeholder="Rating"
            value={howWellUnderstood}
            onChange={evt => setHowWellUnderstood(Number(evt.target.value))}
          />
        </label>

        <button type='submit'>Next</button>
        <h4>{howWellUnderstood}</h4>
      </form>
    </>
  )
}

export default WellUnderstoodForm