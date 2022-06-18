import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

function DisplayFeedback() {

    const howWellFeelingToday = useSelector(store => store.howWellFeelingToday);
    const howWellUnderstood = useSelector(store => store.howWellUnderstood);
    const howWellSupported = useSelector(store => store.howWellSupported);
    const extraComments = useSelector(store => store.extraComments);

    const history = useHistory();

    const submitFeedback = () => {
        axios.post('/submitFeedback', {
            howWellFeelingToday,
            howWellUnderstood,
            howWellSupported,
            extraComments
        })
        .then (() => {
            history.push('/success-page')
        })
        .catch((err) => {
            console.log('err is', err)
        })
        // need to create router on server to handle this to sql
    }

    return (
        // this will show all teh feddback.
        // useSelector from store to display all the answers
        <>
            <h2>Please review your feedback before submitting!</h2>
            <h4>How are you feeling today?</h4>
            <div>{howWellFeelingToday}</div>
            <h4>How well are you understanding the content?</h4>
            <div>{howWellUnderstood}</div>
            <h4>How well are you being supported?</h4>
            <div>{howWellSupported}</div>
            <h4>Any comments you want to leave?</h4>
            <div>{extraComments}</div>

            <button
            onClick={submitFeedback}
            >Submit Feedback</button>
        </>
    )
}

export default DisplayFeedback;