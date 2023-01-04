import React from 'react'
import styles from '../../styles/Loader.module.css'

type Props = {}

const Loader = ({}: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
            </div>
        </div>
    )
}

export default Loader