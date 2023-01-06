import React from 'react'
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
    classes?: string,
}

const MotionLayout = ({ children, classes }: Props) => {
    return (
        <motion.main
            className={classes}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            {children}
        </motion.main>
    )
}

export default MotionLayout