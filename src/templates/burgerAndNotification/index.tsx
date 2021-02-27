import './style.less'
import React from 'react'

// Components
import Burger from '@/components/burger'

const BurgerAndNotification = (): JSX.Element => {
  return (
    <div className="blockAndNotificationWrapper">
      <Burger />
    </div>
  )
}

export default BurgerAndNotification
