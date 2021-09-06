import React, { useState, useContext, useEffect } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Nff from "./Nft";
import { Web3Context } from "web3-hooks";
import { DappContext } from '../Dapp'
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonBottom';
import Logo from '../components/logo';
import Mouse from '../components/Mouse';



const Expo = (nft) => {

  let [expo, setExpo] = useState([])
  const TXT = useContext(DappContext)
  const [web3State] = useContext(Web3Context);

  useEffect(() => {
    console.log(TXT)
    if (TXT) {
      if (web3State.chainId === 4) {
        const getNFT = async () => {
          const expoOWned = []
          const totalSupply = await TXT.totalSupply()

          for (let i = 0; i <= totalSupply.toString(); i++) {

            let owner = await TXT.ownerOf(i)

            let approved = await TXT.getApproved(i)



            if (owner.toLowerCase() === web3State.account.toLowerCase()) {

              const nft = await TXT.getTXTById(i)


              expoOWned.push({
                txt: nft.txt,
                title: nft.title,
                author: nft.author,
                url: nft.url,
                id: i,
              })

            } else if (!approved.startsWith('0x000')) {
              const nft = await TXT.getTXTById(i)

              expoOWned.push({

                txt: nft.txt,
                title: nft.title,
                author: nft.author,
                url: nft.url,
                id: i,
              })
            }
            setExpo(expoOWned)
          }
          console.log('ewewe')


        }

        try {
          getNFT()
        } catch (e) {
          console.log(e)
        }
      }
    }

  }, [TXT, web3State.account, web3State.chainId])

  return (
    <main>
      <Mouse />
      <div className="nft">
        <Navigation />
        <Logo />

        <SimpleGrid columns={[1, 1, 1]}>
          {
            expo.map((el, index) => {
              return <Nff key={index} nft={el}></Nff>
            })}
        </SimpleGrid>

        <ButtonsBottom left={'/project-4'} right={'/contact'} />
      </div>
    </main>
  );
};

export default Expo;