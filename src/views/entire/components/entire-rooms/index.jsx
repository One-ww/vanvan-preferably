import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/section-rooms/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    state => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback(
    item => {
      dispatch(changeDetailInfoAction(item))
      navigate('/detail')
    },
    [navigate, dispatch]
  )
  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}处住所</h2>
      <div className="list">
        {roomList.map(item => {
          return (
            <RoomItem itemData={item} itemWidth="20%" key={item._id} itemClick={itemClickHandle} />
          )
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms
