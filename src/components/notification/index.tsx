import './style.less'
import React from 'react'

import { ReactComponent as NotificationIcon } from '@/assets/icons/bell.svg'

const Notification = (): JSX.Element => {
  return (
    <div className="notification-container">
      <NotificationIcon height={25} width={25} fill="white" stroke="white" strokeWidth={5} />
    </div>
  )
}

export default Notification
