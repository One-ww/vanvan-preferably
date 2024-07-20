import React, { memo } from 'react'

import { HeaderWrapper } from './style'
import HeaderLeft from './children-comp/header-left'
import HeaderCenter from './children-comp/header-center'
import HeaderRight from './children-comp/header-right'

const AppHerder = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHerder
