import React, { useState } from 'react'
import LinkBlock from './linkBlock'
import { AnimatePresence } from "framer-motion"
import Menu from './menu'
import NavBar from './nav'

export default function Header() {
    const [menu, setMenu] = useState(false)

    return (<>
            <AnimatePresence>
                {menu && <Menu onClick={() => setMenu(!menu)}/>}      
            </AnimatePresence>

            <header className="header">
                <a className="header__logo" href="./">
                    <img 
                        className="logo" 
                        src='/image/logo.webp'  
                        alt="logo" 
                        width={76}
                        height={33}
                    />
                    <p>FRANCE MEMES</p>
                </a>
                <NavBar color="white"/>
                <div className="flex">
                    <a target="_blank" href='https://discord.com/channels/724408079550251080/781914269909385237'><div className="header__button smallWhiteButton">Ouvrir</div></a>
                    <div className="burger" onClick={() => setMenu(!menu)}>
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                        <div className="burger__line"></div>
                    </div>
                </div>
            </header>
        </>
    )
}
