import React from 'react'
import { motion } from "framer-motion";

type Props = {
    children: React.ReactNode
}

const MotionLayout = ({ children }: Props) => {
    return (
        <motion.main
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