import PatreonBanner from '../components/herobanner/patreonBanner'
import { AnimatePresence } from "framer-motion"
import Menu from '../components/menu'
import React, { useState } from 'react'
import Block from '../components/Block'
import SubBox from '../components/subBox/subBox'
import SubBoxMobile from '../components/subBox/subBoxMobile'
import LothaireHeads from '../components/lothaireHeads'

export default function Index() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <AnimatePresence>
        {menu && <Menu onClick={() => setMenu(!menu)}/>}      
      </AnimatePresence>

      <PatreonBanner onClick={() => setMenu(!menu)}/>

      <div className="patreon">
        <h2 className="patreon__h2">ABONNEMENTS</h2>
        <SubBox />
        <SubBoxMobile />

        <Block waving={true}>
          <div className="firstBlock__text">
              <h2>À quoi l’argent va servir ?</h2>
              <p>Dans un premier temps à soutenir le projet et à le développer ensemble.</p>
              <p>À la fois pour maintenir ce site web, recréer notre belle boutique de vêtements, recréer de nouvelles vidéos et tutos plus régulièrement, créer plus de giveaways, etc...</p>
              <p>Puis dans un second temps, potentiellement rémunérer le staff si on arrive à des sommes stables.</p>
              <p>Nous sommes très à l’écoute de la “commu”, et nous souhaitons grâce à elle, enrichir le projet <strong>FRANCE MEMES</strong> et son écosystème en plus d’avoir des avantages exclusifs sur ce dernier !</p>
          </div>
          <img src="/image/patreon/chieng.webp"
            className="firstBlock__image"
              alt="second block illustration" 
              width={685}
              height={456}
          />
        </Block>

        <p className="patreon__p">Cliquecliquecliquecliquecliqueclique!!!!!!</p>
        <div className="lastCallToAction__button bigBlackButton">
          <a href="https://www.patreon.com/bePatron?u=43528684">S'abonner à <strong>FRANCE MEMES</strong></a>
          <LothaireHeads />
        </div>
      </div>
    </div>
  );
}