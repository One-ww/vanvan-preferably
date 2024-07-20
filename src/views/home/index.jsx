import React, { memo, useEffect, useState } from 'react'

import vanRquest from '@/services'

const Home = memo(() => {
  const [highCcore, setHighCcore] = useState({})

  useEffect(() => {
    vanRquest.get({ url: '/home/highscore' }).then(res => {
      console.log(res)
      setHighCcore(res)
    })
  }, [])
  return (
    <div>
      <div>{highCcore.title}</div>
      <div>{highCcore.subtitle}</div>
      <ul>
        {highCcore?.list?.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home
