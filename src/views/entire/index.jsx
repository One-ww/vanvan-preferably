import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './components/entire-filter'
import EntireRooms from './components/entire-rooms'
import EntirePagination from './components/entire-pagination'
import { fetchEntireDataAction } from '@/store/modules/entire'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction(0))
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire
