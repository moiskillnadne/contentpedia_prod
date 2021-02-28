import './style.less'
import React from 'react'

// Components
import Burger from '@/components/burger'

const BurgerAndNotification = (): JSX.Element => {
  return (
    <div className="blockAndNotificationWrapper">
      <div className="burgerAndNotificationPosition">
        <Burger />
        <Burger />
      </div>
    </div>
  )
}

export default BurgerAndNotification
