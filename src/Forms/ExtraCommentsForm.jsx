import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ExtraCommentsForm () {

    const dispatch = useDispatch()

    // TODO
    // create useState for form value
    // create html form to fill out
    // send state in payload w/ dispatch
    // create store in index.js
    // add action.payload to store in function

    return (
        dispatch({
            type: 'ADD_EXTRA_COMMENTS',
            payload: // send over the state of the form values
        })

    )
}

export default ExtraCommentsForm