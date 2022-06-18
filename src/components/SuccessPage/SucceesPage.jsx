import { useHistory, Link } from 'react-router-dom';

function SuccessPage() {

    const history = useHistory();

    return (
        <>
            <h2>Submission Successful! </h2>
            <button
            onClick={() => {history.push('/')}}
            >Return to home</button>
        </>
    )
}

export default SuccessPage;