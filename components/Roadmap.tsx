import React from 'react'
import styles from '../styles/Roadmap.module.css'
import LazyViewAnimate from './Layouts/LazyViewAnimate'
import RoadMapCard from './RoadMapCard'
type Props = {

}

const Roadmap = ({ }: Props) => {
  const text: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, itaque ullam? Saepe quae tempora, reprehenderit ratione harum nobis id soluta totam.'
  return (
      <LazyViewAnimate classes={styles.roadmap}>
        <h2 className='section__title'>Roadmap 2022</h2>
        <p className='section__subtitle'>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
        <div className={styles.roadmap__months}>
          <div className={styles['roadmap__months-bg']}>
            <div className={styles.roadmap__line}></div>
          </div>
          <RoadMapCard direction='left' first={true} month={'January'} title={'Brief'} text={text} />
          <RoadMapCard direction='right' month={'February'} title={'Research'} text={text} />
          <RoadMapCard direction='left' month={'March'} title={'Discover'} text={text} />
          <RoadMapCard direction='right' month={'April'} title={'Design'} text={text} />
          <RoadMapCard direction='left' month={'May'} title={'Testing'} text={text} />
          <RoadMapCard direction='right' month={'June'} title={'Launch & Feedback'} text={text} />
        </div>
      </LazyViewAnimate>
  )
}

export default Roadmap