import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

function SuccessPage() {

    let [qrCode, setQrCode] = useState('')

    const history = useHistory();
    const dispatch = useDispatch();

     /* QR TODO
    axios get to router for qr
    axios.get to qr api
    set qrcode url to local state
    use local state in teh img url
    this will send to feedback home
    add extra data to db
    */

    // setting the qr code on page load
    // in solo project this will be used in teh popup
    useEffect(() => {
        setQR();
    }, [])

        const setQR = () => {
            axios.get('/qrCode')
            .then(response => {
                console.log('response is', response.data.qrCode)
                // do I need to send this to store or can I just set the img here and it
                // would change every time on load but lead to the same place??

                // setting a local state with that qr code
                // this works and is  scannable to go back to the starting feedback rating page
                setQrCode(response.data.qrCode);
            })
            .catch((err) => {
                console.error('problem setting QR code', err)
            })
        }



    return (
        <>
            <h2>Submission Successful! </h2>
            <img src={qrCode} alt="" />
            <button
            onClick={setQR}
            >set QR code
            </button>
            <button
            onClick={() => {history.push('/')}}
            >Return to home
            </button>
        </>
    )
}

export default SuccessPage;