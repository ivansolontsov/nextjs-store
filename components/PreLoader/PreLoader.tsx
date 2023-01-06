import React from 'react'
import styles from '../../styles/PreLoader.module.css'

type Props = {}

const PreLoader = ({ }: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
            </div>
        </div>
    )
}

export default PreLoader