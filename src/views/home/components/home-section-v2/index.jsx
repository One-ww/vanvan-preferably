import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionV2Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionFooter from '@/components/section-footer'
import RoomItem from '@/components/section-rooms/room-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionV2 = memo(props => {
  const { infoData } = props
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
      <div className="room-list">
        <ScrollView>
          {infoData.list.map(item => {
            return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
          })}
        </ScrollView>
      </div>
      <SectionFooter name="plus" />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2
