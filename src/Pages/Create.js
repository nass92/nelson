import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonBottom";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/logo";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";
import Create from "../components/CreateNFT/Text";

const Creation = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  }

  return (
    <main>
 
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <Create/>
          
          <SocialNetwork />
          <div className="credits">
            <p>By Nassim Gouja- 2021</p>
          </div>
       
        <ButtonsBottom left={"/expo"} />
      </motion.div>
    
    </main>
  );
};

export default Creation;