import React, { memo } from 'react'

import { HomeWrapper } from './style'
import HomeBanner from './components/home-banner'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home
