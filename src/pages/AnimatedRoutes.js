import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Mission from "./Mission";
import Petition from "./petition";
import Share from "./Share";
import PetitionForm from "./PetitionForm";
import { Sign } from "./sign";
import AddressForm from "./AddressFormcopy";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes key={location.pathname} location={location}>
                <Route exact path='/' element={<Mission />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/petition" element={<Petition />} >
                    <Route path="/petition/nested" element={<PetitionForm />} />
                </Route>
                <Route path="/share" element={<Share />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/address" element={<AddressForm />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;