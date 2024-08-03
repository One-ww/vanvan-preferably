import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DetailWrapper } from './style'
import DetailPictures from './components/detail-pictures'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures />
    </DetailWrapper>
  )
})

export default Detail
