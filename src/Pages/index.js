import React, {useState} from 'react';
import Sidebar from '../Componentes/Sidebar';
import Navbar from '../Componentes/Navbar';
import HeroSection from '../Componentes/HeroSection';
import InfoSection from '../Componentes/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../Componentes/InfoSection/Data';
import Services from '../Componentes/Services';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Services/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}


export default Home;
