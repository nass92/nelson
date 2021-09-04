
import { Container, SimpleGrid, Heading } from "@chakra-ui/react"
import { DappContext } from "../../Dapp"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks";
import NFT from "./NFT";




const Exp = () => {
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
    <Container centerContent as="section" maxW="container.xl" py="10">
      <Heading mb="5" fontSize="3xl">Nelson NFTs</Heading>

      <SimpleGrid columns={[1, 1, 1, 2, 3]} gap="8">
        {expo.map((el, index) => {
          return <NFT key={index} nft={el}></NFT>
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Exp