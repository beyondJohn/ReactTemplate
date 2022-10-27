import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { addressBehaviorSubject } from "../services/address";
import { useNavigate } from "react-router-dom";

function PetitionForm() {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>
        navigate('/sign', { replace: true }), [navigate]
    );

    let myAddressLine = '';
    addressBehaviorSubject.subscribe(myAddress => {
        const town = JSON.parse(myAddress[0])
        const zipCode = JSON.parse(myAddress[1])
        myAddressLine = town.town + ', NJ ' + zipCode.zipCode
    })
    var submitPetition = function (e) {
        handleOnClick()
        console.log('submit petition: ', e)
    }
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}>

            <br />
            <input type={'text'} placeholder={"first name"}></input>
            <br /><br />
            <input type={'text'} placeholder={"last name"}></input>
            <br /><br />
            <input type={'text'} placeholder={"street"}></input>
            <br /><br />
            <input type={'text'} placeholder={"email"}></input>
            <br /><br />
            {myAddressLine}
            <br /><br />
            <button style={{ borderRadius: '6px' }} onClick={submitPetition} type={'button'} >
                Continue{/* <Link to="nested" style={{ textDecoration: 'none' }}>Submit</Link> */}
            </button>

        </motion.div>
    );
}

export default PetitionForm;