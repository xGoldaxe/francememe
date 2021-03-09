import React, { useState } from 'react'
import { motion } from 'framer-motion'


export default function LinkBlock({ children, color }) {
    const [isHovered, setHovered] = useState(false)

    return (
        <motion.div 
            className='linkBlock'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p style={{color: color}}>{children}</p>
            <motion.div 
                className='linkLine'
                style={{background: color}}
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
