import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { EntirePaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination'
import { fetchEntireDataAction } from '@/store/modules/entire'

const EntirePagination = memo(() => {
  const { currentPage, totalCount, roomList } = useSelector(
    state => ({
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
      roomList: state.entire.roomList
    }),
    shallowEqual
  )

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function pageChangeHandle(event, pageCount) {
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(pageCount - 1))
  }

  return (
    <EntirePaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} color="secondary" onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源，共超过 {totalCount} 个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  )
})

export default EntirePagination
