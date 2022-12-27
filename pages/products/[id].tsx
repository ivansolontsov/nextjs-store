import styles from '../../styles/Detail.module.css'
import React from 'react'
import Image from 'next/image'
import { useGetProductByIdQuery } from '../../store/products/ProductApi'
import { useRouter } from 'next/router'
import { Button, Tooltip, Col, Row, notification } from 'antd'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { IProduct } from '../../store/products/productTypes'

type Props = {
}
type NotificationType = 'success' | 'info' | 'warning' | 'error';


const Details: React.FC<Props> = ({ }) => {
  const router = useRouter()
  const { id } = router.query
  const { addItem, openModal } = useActions() // ВЫЗЫВАЕМ ЭКШН ДОБАВИТЬ В КОРЗИНУ
  const { addToFavorites, removeFromFavorites } = useActions()
  const { cart } = useTypedSelector(state => state) // ВЫЗЫВАЕМ СЕЛЕКТОР СТОРА
  const { favorites } = useTypedSelector(state => state)
  const fetching = useGetProductByIdQuery(Number(id));
  const isAlreadyInCart = cart.some(el => el.product.id === Number(id)) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ
  const isAlreadyInFav = favorites.some(el => el.id === Number(id)) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В FAVORITES


  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Product Has Been Added in Cart',
      description:
        'Click to notification to open your cart 😇',
      onClick() {
        openModal()
      },
      placement: 'topLeft',
    });
  };

  const handleCart = (item: IProduct) => {
    if (isAlreadyInCart) {
      console.log('in cart')
    } else {
      addItem({ product: item, amount: 1 })
      openNotificationWithIcon('success');
    }
  }

  const handleFavorites = (product: IProduct) => {
    isAlreadyInFav
      ? removeFromFavorites({ id: product.id })
      : addToFavorites(product)
  }

  return (
    <section className={styles.detail}>
      {contextHolder}
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
            <Row gutter={5}>
              <Col span={20}>
                <Button
                  onClick={() => handleCart(fetching.data)}
                  size='large'
                  type='primary'
                  style={{ width: '100%' }}>
                  {isAlreadyInCart
                    ? 'Added Successfully'
                    : 'Add to Cart'}
                </Button>
              </Col>
              <Col span={4}>
                <Tooltip title={
                  isAlreadyInFav
                    ? 'Remove from favorites'
                    : 'Add in Favorites'
                }>
                  <Button onClick={() => {
                    handleFavorites(fetching.data)
                  }}
                    size='large'
                    type='ghost'
                    shape='default'
                    icon={
                      isAlreadyInFav
                        ? <HeartFilled style={{ color: 'red' }} />
                        : <HeartOutlined />
                    } />
                </Tooltip>
              </Col>
            </Row>
          </div>
        </>
      ) : null}
    </section>
  )
}

export default Details