import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'



function HowWellFeelingTodayForm() {

    const dispatch = useDispatch()

    const [howWellFeelingToday, setHowWellFeelingToday] = useState('')

    const handleHowWellFeeling = (event) => {
        setHowWellFeelingToday(event.target.value);
    }

    const addHowWellFeelingToday = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_HOW_WELL_FEELING_TODAY',
            payload: howWellFeelingToday
        })
    }

    return (
        <>
            <h2>How well are you feeling today?</h2>
            <form onSubmit={(event) => addHowWellFeelingToday(event)}>
                <input
                    onChange={handleHowWellFeeling}
                    type='text'
                    placeholder='answer here'
                    required
                />

                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default HowWellFeelingTodayForm