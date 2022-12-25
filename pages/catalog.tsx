import Head from 'next/head'
import React from 'react'
import { FC } from 'react'
import styles from '../styles/Catalog.module.css'
import { useGetCategoriesQuery } from '../store/categories/categoryApi'
import Link from 'next/link'
import { Skeleton } from 'antd'


const Catalog: FC = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="Lorem ipsum" key="description" />
      </Head>

      <section className={styles['catalog']}>
        <h1 className="section__title">Categories</h1>
        {error ? (
          <h2>
            Error
          </h2>
        ) : isLoading ? (
          <>
            <ul className={styles['catalog__categories']}>
              <div className={styles['catalog__categories-item']}>
                <Skeleton.Input active />
              </div>
              <div className={styles['catalog__categories-item']}>
                <Skeleton.Input active />
              </div>
              <div className={styles['catalog__categories-item']}>
                <Skeleton.Input active />
              </div>
              <div className={styles['catalog__categories-item']}>
                <Skeleton.Input active />
              </div>
              <div className={styles['catalog__categories-item']}>
                <Skeleton.Input active />
              </div>
            </ul>
          </>
        ) : data ? (
          <ul className={styles['catalog__categories']}>
            {data.map((name: string, index) => (
              <Link key={index} href={`/categories/${name}`} className={styles['catalog__categories-item']}>
                <li>
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        ) : null}
      </section>
    </>
  )
}


export default Catalog