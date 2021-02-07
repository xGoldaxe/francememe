import Herobanner from '../components/Herobanner'
import FirstBlock from '../components/FirstBlock'
import SecondBlock from '../components/SecondBlock'
import ThirdBlock from '../components/ThirdBlock'
import FourthBlock from '../components/FourthBlock'
import FifthBlock from '../components/FifthBlock'
import Footer from '../components/Footer'
import { AnimatePresence } from "framer-motion"
import AllElementsLayout from '../layouts/allElementsLayout'
import Menu from '../components/menu'
import React, { useState } from 'react'

export default function Index() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <AnimatePresence>
        {menu && <Menu onClick={() => setMenu(!menu)}/>}      
      </AnimatePresence>



      <Herobanner onClick={() => setMenu(!menu)}/>
      <div className="allBlock">
        
        <AllElementsLayout>
          <FirstBlock />
          <SecondBlock />
          <ThirdBlock />
          <FourthBlock />
          <FifthBlock />
        </AllElementsLayout>

        <div className="lastCallToAction">
          <p>Prêt à commencer une nouvelle vie ?</p>
          <div className="lastCallToAction__button bigBlackButton">
            <a>Rejoindre <strong>FRANCE MEMES</strong></a>
          </div>
        </div>
      </div>   
      <Footer />   
    </div>
  );
}