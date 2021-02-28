import './stlye.less'
import React from 'react'

import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg'

const BurgerButtonsMenu = (): JSX.Element => {
  return (
    <div className="menu-container">
      <MenuIcon height={25} width={25} fill="white" stroke="white" strokeWidth={5} />
    </div>
  )
}

export default BurgerButtonsMenu
