import { useSelector, useDispatch } from 'react-redux'

function DisplayFeedback() {

    const howWellFeelingToday = useSelector(store => store.howWellFeelingToday);
    const howWellUnderstood = useSelector(store => store.howWellUnderstood);
    const howWellSupported = useSelector(store => store.howWellSupported);
    const extraComments = useSelector(store => store.extraComments);

    return (
        // this will show all teh feddback.
        // useSelector from store to display all the answers
        <>
            <h4>How are you feeling today?</h4>
            <div>{howWellFeelingToday}</div>
            <h4>How well are you understanding the content?</h4>
            <div>{howWellUnderstood}</div>
            <h4>How well are you being supported?</h4>
            <div>{howWellSupported}</div>
            <h4>Any comments you want to leave?</h4>
            <div>{extraComments}</div>
        </>
    )
}

export default DisplayFeedback;