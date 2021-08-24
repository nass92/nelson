import { Button, ButtonGroup, Link } from "@chakra-ui/react"
import { useContract } from "web3-hooks"
import { texTokenAbi, texTokenAddress } from './contract'
import { useState, useEffect } from 'react'

const Hash = () => {
  const hash = useContract(texTokenAddress, texTokenAbi)
  const [state, setState] = useState(" ")
  console.log(hash)
  useEffect(() => {
    const Ano = async () => {

      const hash2 = await hash.getHash()
      setState(hash2)
    }
    if (hash !== null) {
      Ano();
    };

  }, [hash])

  return (
    <>

      <a href={`https://ipfs.io/ipfs/${state}`} >salut</a>
    </>
  )
}



export default Hash;