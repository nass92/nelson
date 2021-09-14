import React from 'react';
import { Button, useDisclosure } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";

const SocialNetwork = () => {

  const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => {
        link.style.transform = '';
      })
    })
  }

  const [web3State, login] = useContext(Web3Context);
  const {  onOpen: onOpenLogoutModal} = useDisclosure();
  const handleClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a href="https://www.facebook.com/people/Nelson-Makamo/100044201149568/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-facebook-f"></i></li>
        </a>
        <a href="https://twitter.com/nelsonmakamo" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-twitter"></i></li>
        </a>
        <a href="https://www.instagram.com/nelsonmakamo/" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-instagram"></i></li>
        </a>

        <Button
          colorScheme="tomato"
          bg="#D6D6D6"
          onClick={() => (!web3State.isLogged ? handleClickLogin() : onOpenLogoutModal())}
        >
          {!web3State.isLogged ? "login" : web3State.chainId === 4 ?
            web3State.account.split("").splice(0, 6).join("") + "..." +
            web3State.account.split("").splice(-4).join("") : (<p style={{ color: "red" }}>WRONG NETWORK</p>)}
        </Button>




      </ul>
    </div>
  );
};

export default SocialNetwork;

