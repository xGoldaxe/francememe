import React from 'react'
import react, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";


export default function AnimationAppearLayout({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4
    });
  
    useEffect(() => {
      if (inView) {
        controls.start({
            opacity: 1,
            y: 0
        });
      }
      else {
        controls.start({
            opacity: 0,
            y: 100
        });
      }
    }, [controls, inView]);

    return (
        <motion.div 

            ref={ref}
            animate={controls}
        >
            {children}
        </motion.div>
    )
}
