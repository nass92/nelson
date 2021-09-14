import { motion } from "framer-motion";
import React from 'react'


const Nff = ({ nft }) => {

  let left = Math.floor(Math.random() * 200 + 700) + "px";
  let top = Math.floor(Math.random() * 200 + 150) + "px";
  let size = "scale(" + (Math.random() + 0.7) + ")";

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    }
  };

  // random img pop
  let plusMinus = Math.random() > 0.4 ? 1 : -1;
  let imgX = Math.random() * 350 * plusMinus;
  let imgY = Math.random() * 120 * plusMinus;

  const imgAnim = {
    initial: {
      opacity: 0,
      x: imgX,
      y: imgY,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    }
  }

  const transition = {
    ease: [.03, .87, .73, .9],
    duration: .6,
  }



  return (
    < motion.div
      className="nft-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="nft-content">
        <h1>{nft.title}</h1>
        <h2>{nft.author}</h2>
        <p>{nft.txt}</p>

      </div>
      <motion.div
        className="video-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
      >
        <div >
          {/*<span>
            <h3>{nft.title}</h3>
            <p>{nft.txt}</p>
          </span>}
         {/* <img src={nft.url} alt={nft.title} className="video" />*/}
          <video controls src={nft.url} alt={nft.title} className="video"  type="video/mp4" />
        </div>
        <div className="button-container">
          <a href={nft.url} target="_blank" rel="noopener noreferrer" className="hover">
            <span className="button">voir </span>
          </a>
        </div>
      </motion.div>
      <span className="random-circle" style={{ left, top, transform: size }}></span>
    </motion.div >
  )
}

export default Nff

