import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function ExtraCommentsForm() {

  const dispatch = useDispatch()

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