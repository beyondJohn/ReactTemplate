import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from '../styles.module.css'
import SignaturePad from 'react-signature-canvas'

import { addressBehaviorSubject, addressObjectBehaviorSubject } from "../services/address";

function Sign() {

    let myAddress = ''
    let myAddressObject = {};
    addressObjectBehaviorSubject.subscribe(addressObject => {
        myAddressObject = JSON.parse(addressObject)
    })

    addressBehaviorSubject.subscribe(address => {
        if (address != 'init address' && address != '') {
            const town = JSON.parse(address[0])
            const zipCode = JSON.parse(address[1])
            myAddress = town.town + ', NJ ' + zipCode.zipCode
            myAddressObject.town = town.town
            myAddressObject.zip = zipCode.zipCode
        }

    })

    function checkSign(e) {
        myAddressObject.sigPad = sigPad.getTrimmedCanvas().toDataURL()
        addSupport()
    }
    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>
        navigate('/mission', { replace: true }), [navigate]
    );
    function addSupport() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ petitionEntry: myAddressObject })
        };
        fetch('https://switchmagic.com:4567/api/support', requestOptions)
            .then(response => { 
                alert('THANK YOU FOR SUPPORTING VETERANS!!!')
                handleOnClick()
            }).catch(err => { console.log('error: ', err) })
    }

    let state = { trimmedDataURL: null }
    let sigPad = {}
    const [state1, setState] = useState()
    state.trimmedDataURL = null
    let { trimmedDataURL } = state


    const clear = () => {
        sigPad.clear()
    }
    const trim = () => {
        setState({
            trimmedDataURL: sigPad.getTrimmedCanvas()
                .toDataURL('image/png')
        })
    }

    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
            style={{ position: 'relative', top: '90px' }}
        >
            <h1>Sign the Petition</h1>
            <br />

            <div className={styles.containerSig}>
                <div className={styles.sigContainer}>
                    <SignaturePad canvasProps={{ className: styles.sigPad }}
                        ref={(ref) => { sigPad = ref }} />
                </div>
                <div>
                    <button className={styles.buttons} onClick={clear}>
                        Clear
                    </button>
                </div>
                <div>
                    <br />
                    {myAddress}
                    <br /><br />
                    <button style={{ borderRadius: '6px' }} onClick={checkSign} type={'button'} >
                        Submit
                    </button>
                    <br />
                    <span style={{ fontSize: '35px' }}>🔒</span>
                    <br />
                    Connection is secure

                </div>
                {trimmedDataURL
                    ? <img className={styles.sigImage}
                        src={trimmedDataURL} />
                    : null}
            </div>




        </motion.div>
    );
}
export { Sign }