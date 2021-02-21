import React, {useState} from 'react';
import Sidebar from '../Componentes/Sidebar';
import Navbar from '../Componentes/Navbar';
import HeroSection from '../Componentes/HeroSection';

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
        </>
    )
}


export default Home;
