import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './components/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const Home = memo(() => {
  // 获取redux中的数据
  const { goodPriceInfo } = useSelector(
    state => ({
      goodPriceInfo: state.home.goodPriceInfo
    }),
    shallowEqual
  )

  // 调用redux里边的异步请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
