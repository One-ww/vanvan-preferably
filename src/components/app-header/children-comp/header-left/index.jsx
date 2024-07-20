import React, { memo } from 'react'

import { LeftWrapper } from './style'
import Logo from '@/assets/svg/Logo'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
        <Logo />
        <span className="title">万万城租</span>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
