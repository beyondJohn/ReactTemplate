import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    >
      <h1>The Mission</h1>
      <p>
      I am a retired Vietnam Veteran and I am independently starting my own campaign to take on the State of New Jersey political system. I don’t support ant political party but support veterans. My mission is clearly supporting veterans. I don’t want money, I need your support. Recently retired I am taking time to do the things that I never had time before, due to my hectic work schedule. New Jersey has some of the best public golf courses in the United States and guess what Veterans have to pay full price!
My campaign is simple: I plan on collecting signatures to send to the Governor to plea that Veterans play for free or perhaps just pay for the cart fee as most private clubs require. I will also campaign that all private golf courses allow Veterans play at least 1 round of golf as a foresome at their prestigious club. Most veterans can not afford clubs like Metedeconk National Golf Club, Deal Country Club, Hollywood Country Club, just to name a few. Remember veterans deserve our thanks for their loyalty to our country.
My plea is not to the private clubs but to the State of New Jersey.
      </p>
    </motion.div>
  );
}

export default Home;