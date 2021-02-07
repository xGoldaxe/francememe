import Image from 'next/image'

import { motion, useAnimation } from 'framer-motion'


import React, {useState} from 'react'

function LinkBlock({ children }) {
    const [isHovered, setHovered] = useState(false)

    return (
        <motion.div 
            className='linkBlock'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <li>{children}</li>
            <motion.div 
                className='linkLine'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0}}
                transition={{ 
                    duration: 0.5,
                    ease: 'easeOut'
                }}
            ></motion.div>
        </motion.div>
    )
}


function Herobanner({ onClick }) {
    return (
        <div className="heroBanner">
            <div className="header--wrapper">
                    <img
                        className="leftCity"
                        src="/image/header--wrapper/leftCity.png"
                        layout="fixed"
                        width={656}
                        height={312}
                    />
                    <img
                        className="rightCity"
                        src="/image/header--wrapper/rightCity.png"

                        width={582}
                        height={304}
                    />
                    <img
                        className="buildings"
                        src="/image/header--wrapper/buildings.svg"
                        width={958}
                        height={177}
                    />
                    <img

                        className="leftRay"
                        src="/image/header--wrapper/leftRay.svg"
                        width={1294}
                        height={626}
                    />
                    <img
                        className="rightRay"
                        src="/image/header--wrapper/rightRay.svg"
                        width={996}
                        height={398}
                    />
                    <div className="cloud--wrapper">
                        <img
                        className="middleCloud"
                            src="/image/header--wrapper/middleCloud.svg"
                            width={560}
                            height={140}
                        />                    
                        <img
                            layout="fixed"
                            className="bigCloud"
                            src="/image/header--wrapper/bigCloud.svg"
                            width={634}
                            height={280}
                        />
                    </div>
                    <div className="cloud--wrapper2">
                        <img
                            layout="fixed"
                            className="middleCloud"
                            src="/image/header--wrapper/middleCloud.svg"
                            width={560}
                            height={140}
                        />   
                        <img
                            layout="fixed"
                            className="cloud4"
                            src="/image/header--wrapper/cloud4.svg"                           
                            width={560}
                            height={140}
                        />
                    </div>
                    <div className='flyingDog--wrapper'>
                        <img
                            className="flyingDog"
                            src="/image/header--wrapper/flyingDog.png"
                            
                            width={76}
                            height={64}
                        />
                        <img
                            className="flyingDogCloud"
                            src="/image/header--wrapper/flyingDogCloud.svg"
                            width={163}
                            height={27}
                        />
                    </div>
                    <div className='flyingDog--wrapper2'>
                        <img 
                            className="flyingDog"
                            src="/image/header--wrapper/flyingDog.png"
                            width={76}
                            height={64}
                        />
                        <img
                            className="flyingDogCloud"
                            src="/image/header--wrapper/flyingDogCloud.svg"
                            width={163}
                            height={27}
                        />
                    </div>

                    <img
                        layout="fixed"
                        className="diamond"
                        src="/image/header--wrapper/diamond.svg"
                        width={20}
                        height={28}
                    />
                </div>

            <div className="header__content">
                <header className="header">
                    <div className="header__logo">
                        <img 
                            className="logo" 
                            src='/image/logo.png'  
                            alt="logo" 
                            width={76}
                            height={33}
                        />
                        <p>FRANCE MEMES</p>
                    </div>
                    <nav>
                        <ul>
                            <a href='https://discord.com/'><LinkBlock>Discord</LinkBlock></a>
                            <a href='https://francememes.com/why-france-memes'><LinkBlock>Pourquoi nous ?</LinkBlock></a>
                            <a href='https://patreon.com/francememes'><LinkBlock>Patreon</LinkBlock></a>
                            <a href='https://discord.com/channels/724408079550251080/758695202100740126'><LinkBlock>Support</LinkBlock></a>
                        </ul>
                    </nav>
                    <div className="flex">
                        <a href='https://discord.com/channels/724408079550251080/781914269909385237'><div className="header__button smallWhiteButton">Ouvrir</div></a>
                        <div className="burger" onClick={onClick}>
                            <div className="burger__line"></div>
                            <div className="burger__line"></div>
                            <div className="burger__line"></div>
                        </div>
                    </div>
                </header>

                <div className="heroBanner__text">
                    <h1>LE lieu pour vos memes</h1>
                    <p>Que tu créer des memes, les regardes, ou en rigole, <strong>FRANCE MEMES</strong> est la façon la plus facile de les partager, en parler et en poster chaque jour.
                        <br />(Ceci n’est pas du tout le copier-coller d’un autre site)
                        <img className='facecat'
                            src="/image/facecat.png"
                            alt=""
                            width={33}
                            height={20}
                        />
                    </p>
                </div>

                <div className="heroBanner__buttons">
                    <a href="https://discord.gg/4NPF4g2"><div className="heroBanner__button white whiteBlackButton">Rejoindre FRANCE MEMES</div></a>
                    <a href="https://discord.com/channels/724408079550251080/781914269909385237"><div className="heroBanner__button black blackButton">Ouvrir dans le navigateur</div></a>
                </div>
            </div>
        </div>
    )
}

export default Herobanner