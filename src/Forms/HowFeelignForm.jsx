import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';



function HowWellFeelingTodayForm() {

    const dispatch = useDispatch()
    const history = useHistory();

    const [howWellFeelingToday, setHowWellFeelingToday] = useState(5)



    const addHowWellFeelingToday = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_HOW_WELL_FEELING_TODAY',
            payload: howWellFeelingToday
        })

        history.push('/well-understood');

    }

    return (
        <>
            <h2>How well are you feeling today?</h2>
            <form onSubmit={(event) => addHowWellFeelingToday(event)}>
                <label htmlFor="">
                    Rating
                    <input
                        type="range"
                        min='0'
                        max='10'
                        placeholder="Rating"
                        value={howWellFeelingToday}
                        onChange={evt => setHowWellFeelingToday(Number(evt.target.value))}
                    />
                </label>

                <button type='submit'>Next</button>
                <h4>{howWellFeelingToday}</h4>
            </form>
        </>
    )
}

export default HowWellFeelingTodayForm