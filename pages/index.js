import Herobanner from '../components/herobanner/Herobanner'
import FifthBlock from '../components/FifthBlock'
import Footer from '../components/Footer'
import AllElementsLayout from '../layouts/allElementsLayout'
import Menu from '../components/menu'
import React, { useState } from 'react'
import Block from '../components/Block'

export default function Index() {
  return (
    <div className="App">

      <Herobanner/>
      <div className="allBlock">
        
        <AllElementsLayout>
          <Block>
            <img src='/image/block1.webp'
              className="firstBlock__image"
                alt="first block illustration" 
                width={825}
                height={534}
                />
            <div className="firstBlock__text">
                <h2>Un lieu avec plein de place pour rire et discuter</h2>
                <p>Le serveur Discord est organisé en salons axés sur les memes, mais vous pouvez aussi partager vos créations, et discuter entres membres.</p>
            </div>
          </Block>
          <Block waving={true}>
            <div className="firstBlock__text">
                <h2>La quintessence de Discord</h2>
                <p>
                Divertis-toi en ces temps difficiles, + de 50 salons disponibles, 
                dont un feed alimenté par un algorithme ultra-performant. Sans blague, <strong>FRANCE MEMES</strong> est tellement 
                divertissant qu’il devrait être subventionné par le gouvernement !
                </p>
            </div>
            <img src="/image/block2.webp"
              className="firstBlock__image"
                alt="second block illustration" 
                width={800}
                height={520}
            />
          </Block>
          <Block>
            <img src="/image/block3.webp"
              className="firstBlock__image"
                  alt="block Picture" 
                  width={724}
                  height={440}
              />
              <div className="firstBlock__text">
                  <h2>Nos créateurs inquiètent Twitter et Instagram</h2>
                  <p>
                      Instagram ne fait que copier Twitter,
                      <br/>Twitter c’est toujours du drama,
                      <br/>et Facebo…                        
                      <img className='facecat'
                          src="/image/facecat.png"
                          alt=""
                          width={33}
                          height={20}
                      />
                      <br/><strong>FRANCE MEMES</strong> c’est du contenu original tous les jours grâce à nos créateurs originaux tel que Speedwagon et un système de like pour un super fil d’actualité !
                  </p>
              </div>
          </Block>
          <Block  waving={true}>
            <div className="firstBlock__text">
                <h2>Une modération à votre service</h2>
                <p>
                    Nous avons intégré un règlement hors-pair. Une équipe de modération dévouée pour s’occuper des nuisibles efficacement.
                    (oui même à 2h du matin)
                </p>
            </div>
            <img 
              className="firstBlock__image"
              src="/image/block4.webp"
              alt="block Picture" 
              width={724}
              height={440}
            />
          </Block>
          <FifthBlock />
        </AllElementsLayout>

        <div className="lastCallToAction">
          <div className="lastCallToAction__text">
            <p>Prêt à commencer une nouvelle vie ?</p>
            <img src="/image/lastCallToAction.svg" alt=""/>
          </div>
          <div className="lastCallToAction__button bigBlackButton">
            <a>Rejoindre <strong>FRANCE MEMES</strong></a>
          </div>
        </div>
      </div>   
    </div>
  );
}