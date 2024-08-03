import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './components/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'

import HomeSectionV1 from './components/home-section-v1'
import HomeSectionV2 from './components/home-section-v2'

import { isEmptyO } from '@/utils'
import HomeLongfor from './components/home-longfor'
import { changeHeaderConfigAction } from '@/store/modules/main'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const Home = memo(() => {
  // 获取redux中的数据
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo } =
    useSelector(
      state => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo
      }),
      shallowEqual
    )

  // 调用redux里边的异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {Object.keys(discountInfo).length && <HomeSectionV1 infoData={discountInfo} />}
        {Object.keys(recommendInfo).length && <HomeSectionV1 infoData={recommendInfo} />}

        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        <div className="good-price">
          {isEmptyO(goodPriceInfo) && <SectionHeader title={goodPriceInfo.title} />}
          {isEmptyO(goodPriceInfo) && <SectionRooms roomList={goodPriceInfo.list} />}
          <SectionFooter />
        </div>
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title} subTitle={highScoreInfo.subtitle} />
          <SectionRooms roomList={highScoreInfo.list} />
          <SectionFooter />
        </div>
        {/* plus */}
        {isEmptyO(plusInfo) && <HomeSectionV2 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
