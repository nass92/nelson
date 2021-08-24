import React from 'react'
import HomeSection from './Caroussel'
import { homeObjOne } from './Data'
import Navbar from "../Log & footer/NavBar";
import Hash from '../Contracts & hash/hash';
import StackEx from './meta';
function Home() {

  return (
    <>

      <Navbar />
      <HomeSection {...homeObjOne} />
      <div>
        <StackEx />
        <Hash />
      </div>
    </>
  )
}

export default Home
