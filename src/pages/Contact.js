import React from "react";
import { motion } from "framer-motion";
import VGN_QR_Code from '../../src/VGN_QR_Code.png';

function Contact() {
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
        >

            <div className="imgDiv">
                <img className="qr" src={VGN_QR_Code} alt="VGN_QR_Code" />
            </div>
        </motion.div>
    );
}

export default Contact;