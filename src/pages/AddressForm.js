import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { addressBehaviorSubject, addressObjectService, addressService } from "../services/address";
import { useNavigate } from "react-router-dom";

let isInit = true
var townVar = ''
var zipCodeVar = ''
let myAddressLine = ''
let firstVar = ''
let lastVar = ''
let streetVar = ''
let emailVar = ''

function AddressForm() {

    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>
        navigate('/sign', { replace: true }), [navigate]
    );

    let initState = () => {
        return {
            first: '',
            last: '',
            zipCode: '',
            town: '',
            email: '',
            streetAddress: '5 Main St'
        }
    }
    const [myAddressData, setAddress] = useState(initState);

    const updatedState = (zipCode, town, email, street, first, last) => {
        setAddress({
            first: first,
            last: last,
            zipCode: zipCode,
            town: town,
            email: email,
            streetAddress: street
        })

        myAddressData.first = first
    }
    if (isInit) {
        isInit = !isInit
        addressBehaviorSubject.subscribe(myAddress => {
            townVar = JSON.parse(myAddress[0])
            const myTown = townVar.town


            zipCodeVar = JSON.parse(myAddress[1])
            const myZip = zipCodeVar.zipCode

            myAddressLine = townVar.town + ', NJ ' + zipCodeVar.zipCode

            updatedState(myZip, myTown, 'jp@here.com', '1 Easy St')
        })
    }

    var submitPetition = function (e) {
        // notify behavior subjectservice
        addressObjectService.send(JSON.stringify(myAddressData))
        
        handleOnClick()
    }
    const handleChangeFirst = (e) => {
        var max_chars = 20;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
        if (e.target.value.length < 2) {
            
        }
        else {
            const myFirstName = document.getElementById('inputFirst').value
            firstVar = myFirstName
            
            updatedState(zipCodeVar.zipCode, townVar.town, emailVar, streetVar, myFirstName, lastVar )
        }
    }
    const handleChangeLast = (e) => { 
        var max_chars = 20;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
        if (e.target.value.length < 2) {
            return
        }
        else {
            const myLastName = document.getElementById('inputLast').value
            lastVar = myLastName
            
            updatedState(zipCodeVar.zipCode, townVar.town, emailVar, streetVar, firstVar, myLastName)

        }
    }
    const handleChangeStreet = (e) => { 
        var max_chars = 20;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
        if (e.target.value.length < 2) {
            return
        }
        else {
            
            
            const myStreetName = document.getElementById('inputStreet').value
            streetVar = myStreetName
            
            updatedState(zipCodeVar.zipCode, townVar.town, emailVar, streetVar, firstVar, lastVar)

        }
    }
    const handleChangeEmail = (e) => {
        var max_chars = 20;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
        if (e.target.value.length < 2) {
            return
        }
        else {
            
            // inputEmail
            const myEmail = document.getElementById('inputEmail').value
            emailVar = myEmail
            
            updatedState(zipCodeVar.zipCode, townVar.town, emailVar, streetVar, firstVar, lastVar)

        }
     }
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
            style={{ position: 'relative', top: '90px' }}>
            <h1>Step 2 of 3</h1>
            <br />
            <br />
            <input id="inputFirst" type={'text'} placeholder={"first name"} onChange={handleChangeFirst}></input>
            <br /><br />
            <input id="inputLast" type={'text'} placeholder={"last name"} onChange={handleChangeLast}></input>
            <br /><br />
            <input id="inputStreet" type={'text'} placeholder={"street"} onChange={handleChangeStreet}></input>
            <br /><br />
            <input id="inputEmail" type={'text'} placeholder={"email optional"} onChange={handleChangeEmail}></input>
            <br /><br />
            {myAddressLine}
            <br /><br />
            <button style={{ borderRadius: '6px' }} onClick={submitPetition} type={'button'} >
                Continue
            </button>
            <br />
            <span style={{ fontSize: '35px' }}>🔒</span>
            <br />
            Connection is secure

        </motion.div>
    );
}

export default AddressForm;