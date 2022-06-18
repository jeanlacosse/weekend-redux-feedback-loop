import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link} from 'react-router-dom';


function ExtraCommentsForm() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [extraComments, setExtraComments] = useState('')

  const handleComments = (event) => {
    setExtraComments(event.target.value);
  }

  const addComment = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_EXTRA_COMMENTS',
      payload: extraComments
    })

    history.push('/display-feedback');
  }

  return (
    <>
      <h2>Any extra comments from today?</h2>
      <form onSubmit={(event) => addComment(event)}>
        <input
          onChange={handleComments}
          type='text'
          placeholder='answer here'
        />

        <button type='submit'>Next</button>
      </form>
    </>
  )
}

export default ExtraCommentsForm