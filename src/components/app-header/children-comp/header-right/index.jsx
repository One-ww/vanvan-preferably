import React, { memo, useEffect, useState } from 'react'

import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'

const HeaderRight = memo(() => {
  // 控制更多按钮弹窗显示
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    // 点击事件处理函数
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 监听window全局的点击事件
    window.addEventListener('click', windowHandleClick, true)
    // 消除副作用
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  // 显示更多
  const profileClickHandle = () => {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconProfileMenu />
        <IconProfileAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
