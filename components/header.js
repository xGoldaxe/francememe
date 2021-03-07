import React, { useState } from 'react'
import LinkBlock from './linkBlock'
import { AnimatePresence } from "framer-motion"
import Menu from './menu'

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
                <nav>
                    <ul>
                        <li><a href='https://discord.com/'><LinkBlock>Discord</LinkBlock></a></li>
                        <li><a href='/why_us'><LinkBlock>Pourquoi nous ?</LinkBlock></a></li>
                        <li><a href='/patreon'><LinkBlock>Patreon</LinkBlock></a></li>
                        <li><a href='https://discord.com/channels/724408079550251080/758695202100740126'><LinkBlock>Support</LinkBlock></a></li>
                        <li><a href='https://discord.com/channels/724408079550251080/758695202100740126'><LinkBlock>Shop</LinkBlock></a></li>
                    </ul>
                </nav>
                <div className="flex">
                    <a href='https://discord.com/channels/724408079550251080/781914269909385237'><div className="header__button smallWhiteButton">Ouvrir</div></a>
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
