import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { addressObjectService } from "../services/address";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

let myAddressLine = ''
function AddressForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleOnClick = useCallback(() =>
        navigate('/sign', { replace: true }), [navigate]
    );
    const submitForm = (myData) => {
        addressObjectService.send(myData)
        handleOnClick()
    }
    return (
        <motion.div className="container text-center  bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} style={{ position: 'relative', top: '90px' }}>
            <h1>Step 2 of 3</h1>
            <br /><br />
            <form onSubmit={handleSubmit((data) => submitForm(JSON.stringify(data)))}>
                <input {...register("first", { required: true })} type={'text'} placeholder={"first name"}></input>
                <br /><br />
                <input {...register("last", { required: true })} type={'text'} placeholder={"last name"}></input>
                <br /><br />
                <input {...register("street", { required: true })} type={'text'} placeholder={"street"}></input>
                <br /><br />
                <input {...register("email")} type={'text'} placeholder={"email optional"}></input>
                <br /><br />
                {myAddressLine}
                <br /><br />
                <button style={{ borderRadius: '6px' }} type={'submit'} >Continue</button>
            </form>
            <br />
            <span style={{ fontSize: '35px' }}>🔒</span>
            <br />
            Connection is secure
        </motion.div>
    );
}
export default AddressForm;