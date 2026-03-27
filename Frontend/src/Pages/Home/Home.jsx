import React from 'react'
import Homehero from '../../Components/Homehero/Homehero'
import About from '../../Components/Homehero/About/About'
import Vedio from '../../Components/Homehero/Vedio/Vedio'
import Catagory from '../../Components/Homehero/Catagory/Catagory'
import Program from '../../Components/Homehero/Program/Program'
import Plan from '../../Components/Homehero/Plan/Plan'
import Event from '../../Components/Homehero/Event/Event'
import Marry from '../../Components/Homehero/Marry/Marry'

const Home = () => {
  return (
    <div>
        <Homehero/>
        <About/>
        <Vedio/>
        <Catagory/>
        <Program/>
        <Plan/>
        <Event/>
        <Marry/>
    </div>
  )
}

export default Home