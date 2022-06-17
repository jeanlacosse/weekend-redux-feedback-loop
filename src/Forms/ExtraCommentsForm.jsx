import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function ExtraCommentsForm () {

    const dispatch = useDispatch()

    const [extraComments, setExtraComments] = useState('')

    const handleComments = (event) => {
        event.preventDefault();
        setExtraComments(event.target.value);

        dispatch({
            type: 'ADD_EXTRA_COMMENTS',
            payload: extraComments
        })
      }

    // TODO
    // create useState for form value
    // create html form to fill out
    // send state in payload w/ dispatch
    // create store in index.js
    // add action.payload to store in function
   

    return (
        <form onSubmit={(event) => addProduct(event)}>
      <input
        onChange={handleComments}
        type='text'
        placeholder='Comments'
      />

      <button type='submit'>Next</button>
    </form>
    )
}

export default ExtraCommentsForm