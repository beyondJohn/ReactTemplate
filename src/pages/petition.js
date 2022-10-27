import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import zip from "../zipcodes";
import { addressService } from "../services/address";

// let myNumbers
let pageTitleText = 'Step 1 of 3'
function Petition() {

    function checkZip(e) {

        zip.forEach(element => {

            if (element[myZip.zipCode] != undefined) {
                myZip.town = element[myZip.zipCode]
            }
        });

        addressService.send([JSON.stringify({ town: myZip.town }), JSON.stringify({ zipCode: myZip.zipCode })])

        if (myZip.town) {
            handleOnClick()
            pageTitleText = 'Step 1 of 3'
        }
        else {
            alert('Please enter a valid New Jersey 5 digit zipcode. Thanks :-)')
        }

    }

    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>
        navigate('/address', { replace: true }), [navigate]
    );

    const initialState = () => {
        // seed the json
        return {
            email: '',
            streetAddress: '',
            town: '',
            zipCode: ''
        }
    }
    const [myZip, setZip] = useState(initialState);

    const location = useLocation();

    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("07750");

    const handleChangeZip = (e) => {
        let value = e.target.value;
        let numbers = value.replace(/[^0-9]/g, "");
        e.target.value = numbers;
        var max_chars = 5;

        if (e.target.value.length > max_chars) {
            e.target.value = e.target.value.substr(0, max_chars);
        }
        if (e.target.value.length != 5) {

        }
        else {
            setZip({
                zipCode: numbers,
                town: myZip.town,
                email: '',
                streetAddress: ''
            })
        }


    }
    function updateZip() {

        return myZip.town + ', NJ ' + myZip.zipCode

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

            <h1>{pageTitleText}</h1>
            <br />


            {!location.pathname.includes('nested') ?
                <>
                    <input type={'text'} placeholder={"Zipcode"} onChange={handleChangeZip}></input>
                    <br /><br />
                    <button style={{ borderRadius: '6px' }} onClick={checkZip} type={'button'} >
                        Continue{/* <Link to="nested" style={{ textDecoration: 'none' }}>Submit</Link> */}
                    </button>
                    {/* <div>{updateZip()}</div> */}
                </>
                :
                null
            }

            <br />

            <Outlet />
            <br />
            <span style={{ fontSize: '35px' }}>🔒</span>
            <br />
            Connection is secure
        </motion.div>
    );
}

export default Petition;