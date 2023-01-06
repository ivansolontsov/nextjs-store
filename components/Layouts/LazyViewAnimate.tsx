import React from 'react'
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
    classes?: string,
}

const LazyViewAnimate = ({ children, classes }: Props) => {
    return (
        <motion.section
            className={classes}
            initial={{ opacity: 0, zIndex: 20, position: 'relative' }}
            whileInView={{ opacity: 1, zIndex: 20, position: 'relative' }}
            viewport={{ once: true }}
        >
            {children}
        </motion.section >
    )
}

export default LazyViewAnimate