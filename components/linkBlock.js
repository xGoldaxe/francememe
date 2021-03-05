import React, { useState } from 'react'
import { motion } from 'framer-motion'


export default function LinkBlock({ children }) {
    const [isHovered, setHovered] = useState(false)

    return (
        <motion.div 
            className='linkBlock'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p>{children}</p>
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
