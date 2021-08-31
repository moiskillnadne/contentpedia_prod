import './style.less'
import React from 'react'

import MenuLink from '@/components/menuButton/index'

const Menu = (): JSX.Element => {
  return (
    <div className="menu_wrap">
      <div className="menu_title">
        <p>Menu</p>
      </div>
      <div className="menu">
        <MenuLink />
      </div>
    </div>
  )
}

export default Menu
