import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function ExtraCommentsForm () {

    const dispatch = useDispatch()

    return (
        dispatch({
            type: 'ADD_EXTRA_COMMENTS',
            payload: // send over the state of thh form values
        })

    )
}

export default ExtraCommentsForm