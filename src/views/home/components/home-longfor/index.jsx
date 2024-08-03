import PropTypes from 'prop-types'
import React, { memo } from 'react'

import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'

import { LongforWrapper } from './style'

const HomeLongfor = memo(props => {
  const { infoData } = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {infoData.list.map(item => {
            return (
              <div className="inner" key={item.city}>
                <div className="item-info">
                  <img className="cover" src={item.picture_url} alt="" />
                  <div className="bg-cover"></div>
                  <div className="info">
                    <div className="city">{item.city}</div>
                    <div className="price">均价 {item.price}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor
