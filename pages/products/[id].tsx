import styles from '../../styles/Detail.module.css'
import React from 'react'
import Image from 'next/image'
import { useGetProductByIdQuery } from '../../store/products/ProductApi'
import { useRouter } from 'next/router'
import { Button } from 'antd'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

type Props = {
}


const Details: React.FC<Props> = ({ }) => {
  const router = useRouter()
  const { id } = router.query
  const { addItem } = useActions() // ВЫЗЫВАЕМ ЭКШН ДОБАВИТЬ В КОРЗИНУ
  const { cart } = useTypedSelector(state => state) // ВЫЗЫВАЕМ СЕЛЕКТОР СТОРА
  const fetching = useGetProductByIdQuery(Number(id));
  const isAlreadyInCart = cart.some(el => el.id === Number(id)) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ

  return (
    <section className={styles.detail}>
      {fetching.error ? (
        <h2>
          Error
        </h2>
      ) : fetching.isLoading ? (
        <>
        </>
      ) : fetching.data ? (
        <>
          <div className={styles['detail__image']}>
            <Image
              src={fetching.data.thumbnail}
              alt={fetching.data.title}
              fill
              sizes='(max-width: 1600px) 500px'
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles['detail__info']}>
            <h1 className={styles['detail__title']}>
              {fetching.data.title}
            </h1>
          </div>
          <div className={styles['detail__actions']}>
            <h2 className={styles['details__price']}>${fetching.data.price}</h2>
            <Button onClick={() => !isAlreadyInCart && addItem(fetching.data)} size='large' className={styles['details__actions-cart-button']}>
              {isAlreadyInCart ? 'Product Has Been Added' : 'Add to Cart'}
            </Button>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default Details