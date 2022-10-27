import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Mission() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
      style={{position:'relative', top:'73px', zIndex:'1'}}
    >
      <h1>MISSION:</h1>
      <span style={{fontSize:'50px'}}>&#9971;</span>
      <h3>Provide Veterans discounted rates at Monmouth County Park System golf courses! </h3>
      <span style={{fontSize:'70px'}}>🏌️</span>
      <br />
      
      <p>
      I am a retired Vietnam Veteran.
      <br />
My campaign is simple: I plan on collecting signatures to send to the Governor to plea that Veterans play for free or perhaps just pay for a cart fee. I will also campaign for private golf courses to allow Veterans play at least 1 round of golf at their prestigious clubs. Most Veterans can not afford clubs like Metedeconk National Golf Club, Deal Country Club, Hollywood Country Club, just to name a few. Remember Veterans deserve our thanks for their loyalty to our country.
New Jersey has some of the best public golf courses in the United States, Veterans shouldn't have to pay full price!
      </p>
      <Link to="/petition"><button style={{ borderRadius: '6px' }}  type={'button'}> Sign the petition</button></Link>
      <br /><br />
    </motion.div>
  );
}

export default Mission;