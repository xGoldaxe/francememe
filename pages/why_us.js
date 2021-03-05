import WhyUsBanner from '../components/herobanner/whyUsBanner'
import { AnimatePresence } from "framer-motion"
import Menu from '../components/menu'
import React, { useState } from 'react'

export default function Index() {
  const [menu, setMenu] = useState(false)
  return (
    <div className="App">
      <AnimatePresence>
        {menu && <Menu onClick={() => setMenu(!menu)}/>}      
      </AnimatePresence>

      <WhyUsBanner onClick={() => setMenu(!menu)}/>
      <div className="whyUs--container">
        <div className="whyUs">
          <h2><span>FRANCE MEMES</span>, c’est avant tout une famille.</h2>
          <div className="whyUs__text">
              <p><span>FRANCE MEMES</span> a été fondé par Lotharie et Squalala, deux amis de longue date dans le but de proposer de supers memes pour tout le monde !</p>

              <p>Tu ne peux pas tomber sur un serveur plus jeune et dynamique que <span>FRANCE MEMES</span> ! Avec sa communauté hyper active, en nous rejoignant, tu auras beaucoup de contenus et des gens avec qui discuter à toute heure.</p>

              <p>Le renouvellement constant du serveur avec son système de niveau et son architecture bien pensé te permettra de découvrir le serveur à ton rythme. Plus tu participes, plus t’auras de contenu, plus de nouveaux salons, plus de privilèges.</p>

              <p>Et ce partout et quand tu le souhaites ! Que ce soit en faisant ta vaisselle ou en démoulant ton meilleur cake, tu pourras te divertir à toute heure. UwU</p>
          </div>
          <img 
            src="/image/whyUs/staff.webp"
            width={681}
            height={346}
            alt="staff"
          />

          <h2><span>FRANCE MEMES</span>, c’est aussi une success story.</h2>
          <div className="whyUs__text">
            <p>L’origine remonte à l’heure où Squalala n’ayant point trouver de serveurs de memes français en ce soir du 21 juin 2020. Lotharie, son ami de longue de date (le mec avec des lunettes de soleil), décide alors de créer un serveur d’archives de memes, dans le but de proposer une énorme bibliothèque pour tout le monde et que tout le monde puissent contribuer à la librairie.</p>

            <p>Le succès fut telle, qu’en août, les deux compaires atteignent déjà 200 membres, puis septembre 400, 800, etc... Le nombre n’a cessé de grimper chaque mois avec aujourd’hui des milliers de membres !</p>

            <p>Bon après faut pas déconner, on est pas encore une success story dans le monde mdr.</p>
          </div>
          <img 
              src="/image/whyUs/stonks.webp"
              width={648}
              height={388}
              alt="stonks"
          />
        </div>
      </div>
    </div>
  );
}