import './style.less'
import React from 'react'

// Components
import Burger from '@/components/burger'
import Notification from '@/components/notification'

const BurgerAndNotification = (): JSX.Element => {
  return (
    <div className="blockAndNotificationWrapper">
      <div className="burgerAndNotificationPosition">
        <Burger />
        <Notification />
      </div>
    </div>
  )
}

export default BurgerAndNotification
