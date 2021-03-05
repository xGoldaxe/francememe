import React from 'react'
import { motion } from 'framer-motion'

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
                <p onClick={onClick}>X</p>
                <p>Faudra remplir ca bien evidémment</p>
            </motion.div>
            <motion.div 
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
