import React from 'react'
import HomeSection from './Caroussel'
import { homeObjOne } from './Data'
import Navbar from "../Log & footer/NavBar";
import StackEx from './meta';
import NavBar from './Navbar';
import GridText from './Grid'
function Home() {

  return (
    <>

      <Navbar />
      <HomeSection {...homeObjOne} />
      <div>


        <GridText />
      </div>
    </>
  )
}

export default Home
