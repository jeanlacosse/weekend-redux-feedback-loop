import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';



function HowWellSupported() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [howSupported, setHowSupported] = useState(5)


  const addComment = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD-HOW-WELL-SUPPORTED',
      payload: howSupported
    })

    history.push('/extra-comments');
  }

  return (
    <>
      <h2>How well are you being supported?</h2>
      <form onSubmit={(event) => addComment(event)}>
        <label htmlFor="">
          Rating
          <input
            type="range"
            min='0'
            max='10'
            placeholder="Rating"
            value={howSupported}
            onChange={evt => setHowSupported(Number(evt.target.value))}
          />
        </label>


        <button type='submit'>Next</button>
        <h4>{howSupported}</h4>
      </form>
    </>
  )
}

export default HowWellSupported