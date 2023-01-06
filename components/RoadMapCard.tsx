import React from 'react'
import styles from '../styles/Roadmap.module.css'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    direction?: string,
    first?: boolean,
    title?: string,
    month?: string,
    text?: string,
}

const RoadMapCard = ({ direction, first, title, text, month }: Props) => {
    return (
        <motion.div
            initial={direction === "left"
                ? { x: -100 }
                : { x: 100 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            className={`${styles['roadmap__month-item']} ${direction === 'left' ? '' : styles._right}`}
            style={
                first
                    ? {}
                    : direction === 'left'
                        ? { marginTop: '-6px' }
                        : { marginTop: '120px' }
            }>
            <div className={`${direction === "left" ? styles['roadmap__month-arrow_left'] : styles['roadmap__month-arrow_right']}`}>
                <div className={`${direction === 'left' ? styles['roadmap__month-dot_left'] : styles['roadmap__month-dot_right']}`}></div>
            </div>
            <div className={`${styles['roadmap__month-border']} ${direction === "left" ? styles['roadmap__month-border_left'] : styles['roadmap__month-border_right']}`}>
                <div className={styles['roadmap__month-wrapper']}>
                    <div className={styles['roadmap__month-inner-content']}>
                        <h4 className={styles['roadmap__item-label']}>
                            {month
                                ? month
                                : "Month"}
                        </h4>
                        <h3 className={styles['roadmap__item-title']}>
                            {title
                                ? title
                                : "Title"}
                        </h3>
                        <p className={styles['roadmap__item-text']}>
                            {text
                                ? text
                                : "text"}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div >

    )
}

export default RoadMapCard