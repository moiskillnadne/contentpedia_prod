import './style.less'
import React from 'react'

import Title from './title'
import Menu from './menu'

const Navigation = (): JSX.Element => {
  return (
    <div className="navigation">
      <Title />
      <Menu />
      <div>other</div>
      <div>account</div>
    </div>
  )
}

export default Navigation
