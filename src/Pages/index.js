import React, {useState} from 'react';
import Sidebar from '../Componentes/Sidebar';
import Navbar from '../Componentes/Navbar';
import HeroSection from '../Componentes/HeroSection';
import InfoSection from '../Componentes/InfoSection';
import { homeObjOne } from '../Componentes/InfoSection/Data';

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
        </>
    )
}


export default Home;
