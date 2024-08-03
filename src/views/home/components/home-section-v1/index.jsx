import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { HomeSectionV1Wrapper } from './style'

import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo(props => {
  const { infoData } = props
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback((item, index) => {
    setName(item)
  }, [])
  return (
    <HomeSectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%" />
      <SectionFooter name={name} />
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1
