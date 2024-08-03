import React, { memo, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import ScrollView from '@/base-ui/scroll-view'
import { TabsWrapper } from './style'

const SectionTabs = memo(props => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick(item, index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames('item', { active: index === currentIndex })}
              onClick={e => itemClickHandle(item, index)}
            >
              {item}
            </div>
          )
        })}
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
