import Link from 'next/link';
import styles from '../../styles/CategoryBar.module.css'
import React from 'react'
import { useGetCategoriesQuery } from '../../store/categories/categoryApi';
import { useRouter } from 'next/router';
import { CATALOG_ROUTE } from '../../utils/consts';
import { Skeleton } from 'antd';

type Props = {
}

const CategoryBar: React.FC<Props> = ({ }) => {
    const { data, isLoading, error } = useGetCategoriesQuery(); // продукты с определенным числом
    const { query, pathname } = useRouter()
    return (
        <ul className={styles.catbar}>
            {error ? (
                <p>Category Fetching Error</p>
            ) : isLoading ? (
                <li><Skeleton active style={{ padding: '16px' }} /></li>
            ) : data ? (
                <>
                    <li>
                        <Link href={`${CATALOG_ROUTE}`} className={pathname === CATALOG_ROUTE ? styles['catbar__link_active'] : styles['catbar__link']}>
                            All Products
                        </Link>
                    </li>
                    {
                        data.map((name, index) => (
                            <li key={index}>
                                <Link href={`${CATALOG_ROUTE}/${name}`} className={query.name === `${name}` ? styles['catbar__link_active'] : styles['catbar__link']}>
                                    {name}
                                </Link>
                            </li>
                        ))
                    }
                </>
            ) : null
            }
        </ul>
    )
}

export default CategoryBar