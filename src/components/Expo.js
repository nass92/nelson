import React, { useState, useContext, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Nff from "./Nft";
import { Web3Context } from "web3-hooks";
import { DappContext } from '../Dapp'
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonBottom';
import Logo from '../components/logo';
import Mouse from '../components/Mouse';
import { useRouteMatch } from "react-router-dom";



const Expo = (nft) => {
  
  const match = useRouteMatch("/expo/:id");
  let [expo, setExpo] = useState([])
  const TXT = useContext(DappContext)
  const [web3State] = useContext(Web3Context);

  useEffect(() => {    
    const getNFT = async () => {
      const expoOWned = []
      const totalSupply = await TXT.totalSupply()
      for (let i = 0; i < totalSupply.toString(); i++) {
        // let approved = await TXT.getApproved(i)
        const nft = await TXT.getNMById(i)

        expoOWned.push({
          txt: nft.txt,
          title: nft.title,
          author: nft.artist,
          url: nft.url,
          id: i,
        })
      }
      setExpo(expoOWned)
    }

    try {
      if (web3State.chainId === 4 && TXT !== undefined) {
        getNFT()
      }
    } catch (e) {
      console.log(e)
    }

  }, [TXT, web3State.account, web3State.chainId])

  return (
    <main>
      <Mouse />
      <div className="nft">
        <Navigation />
        <Logo />

        <SimpleGrid columns={[1, 1, 1]}>
          {expo.length > 0 ? <Nff key={match.params.id} nft={expo[match.params.id]}></Nff> : ''}
        </SimpleGrid>

        <ButtonsBottom left={parseInt(match.params.id) === 0 ? `${expo.length - 1}`: `${match.params.id - 1}`} right={parseInt(match.params.id) === expo.length - 1 ?`0` : `${parseInt(match.params.id) + 1}`} />
      </div>
    </main>
  );
};

export default Expo;