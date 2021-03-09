import React from 'react'
import { motion } from 'framer-motion'
import LinkBlock from './linkBlock'
import NavBar from './nav'

export default function Menu({onClick}) {
    return (
        <div className='menu--wrapper'>
            <motion.div 
                key={'menu'}
                className='menu'
                initial={{ x: '200%' }}
                animate={{ x: 0 }}
                exit={{ x: '200%' }}
                transition={{
                    duration: 0.3,
                    ease: 'linear'
                }}
            >
                <img src="/image/cross.svg" className="menu__cross" alt="X" widht="24" height="24" onClick={onClick}/>
                <a class="menu__logo" href="./">
                    <img 
                        className="logo" 
                        src="/image/logo.webp" 
                        alt="logo" 
                        width="76" 
                        height="33"
                    />
                    <p>FRANCE MEMES</p>
                </a>
                {/* <p onClick={onClick}>X</p> */}
                <hr></hr>
                <NavBar color="black" />
                <div className="menu__bottom"></div>
            </motion.div>
            <motion.div 
                onClick={onClick}
                key={'background'}
                className='menu__background'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeOut'
                }}
            />
        </div>
    )
}
