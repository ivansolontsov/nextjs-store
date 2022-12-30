import styles from '../../styles/Detail.module.css'
import React, { FC, useEffect } from 'react'
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

interface IImage {
  link: string,
}


const Details: React.FC<Props> = ({ }) => {
  const router = useRouter()
  const { id } = router.query
  const fetching = useGetProductByIdQuery(Number(id));

  const { addItem, openModal, addToFavorites, removeFromFavorites } = useActions()
  const { cart, favorites } = useTypedSelector(state => state)

  const isAlreadyInCart = cart.some(el => el.product.id === Number(id)) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В КОРЗИНЕ
  const isAlreadyInFav = favorites.some(el => el.id === Number(id)) // ПРОВЕРКА НА НАЛИЧИЕ ТОВАРА В FAVORITES

  const [mainImage, setMainImage] = React.useState<IImage>({ link: '' })

  useEffect(() => {
    setMainImage({ link: fetching.data?.thumbnail || '' })
  }, [fetching.isSuccess])

  const handleGallery = (image: string) => {
    setMainImage({ link: image })
  }


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
    if (!isAlreadyInCart) {
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
          <Row gutter={20} justify={`space-between`}>
            <Col span={6}>
              <div className={styles['detail__image']}>
                <Image
                  src={mainImage.link || fetching.data.thumbnail}
                  alt={fetching.data.title}
                  priority={false}
                  fill
                  sizes='(max-width: 1600px) 500px'
                  style={{ objectFit: 'cover' }}
                />
                <Image
                  src={mainImage.link || fetching.data.thumbnail}
                  alt={fetching.data.title}
                  priority={false}
                  fill
                  sizes='(max-width: 1600px) 500px'
                  style={{ objectFit: 'cover' }}
                  className={styles['detail__image-fx']}
                />
              </div>
              <div className={styles['details__gallery-items']}>
                {fetching.data.images.map((image, index) => (
                  <div key={index} className={styles['details__gallery-item']} onMouseEnter={() => handleGallery(image)}>
                    <Image priority={false} src={image} sizes='(max-width: 1600px) 50px' fill alt={fetching.data.title} style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            </Col>
            <Col span={12}>
              <div className={styles['detail__info']}>
                <small>
                  {fetching.data.brand}
                </small>
                <h1 className={styles['detail__title']}>
                  {fetching.data.title}
                </h1>
              </div>
            </Col>
            <Col span={6}>
              <div className={styles['detail__actions']}>
                <h2 className={styles['details__price']}>${fetching.data.price}</h2>
                <p>
                  Rating: {fetching.data.rating}
                </p>
                <p>
                  Stock: {fetching.data.stock}
                </p>
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
                        type='primary'
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
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={24}>
              <h2>Description</h2>
              <p>
                {fetching.data.description}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ducimus enim ipsa ullam soluta sint recusandae mollitia expedita distinctio doloremque non dolores, laborum ex omnis veniam totam? Molestias, modi praesentium.
                Perferendis ex deleniti aspernatur vitae, voluptates amet recusandae reprehenderit, id esse et distinctio unde. Temporibus molestias repellat neque fugit mollitia impedit rem. Tenetur cum impedit blanditiis, molestias excepturi eum fugit!
                Commodi delectus, quis vel assumenda totam nemo repudiandae dolores quod modi non excepturi quo in temporibus, dolorum pariatur! Repellat, expedita voluptatibus fugiat iste temporibus possimus accusantium! Voluptates ad sint suscipit!
                Illum esse, porro velit recusandae eligendi nemo suscipit voluptatibus ex in libero, reprehenderit tenetur. Cumque accusantium quia fugit magni sapiente, eum voluptatem voluptatibus libero, possimus ratione non doloribus vitae dolores!
                Minus excepturi amet quod doloremque iste consequatur quidem libero tempore, esse dolor voluptate praesentium suscipit sint. Alias magni mollitia saepe laborum corporis repudiandae delectus tempore! Eos enim sequi neque unde.
                Ducimus accusantium porro, aperiam maiores obcaecati quos officiis debitis, maxime voluptatibus quod quisquam sequi pariatur ut est tempora eum aliquam necessitatibus. Ipsam animi voluptates placeat, commodi dolor sequi doloremque tempore!
                Minus saepe in incidunt magnam dolorem asperiores? Quaerat, ipsa, atque molestiae culpa ad iusto dignissimos sunt suscipit debitis eligendi quos laborum optio aspernatur! Rerum dolore explicabo iure, error quasi cumque?
              </p>
            </Col>
          </Row>
        </>
      ) : null}
    </section>
  )
}

export default Details