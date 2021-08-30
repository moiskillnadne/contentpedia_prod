import './style.less'
import React from 'react'

import Title from './title'

const Navigation = (): JSX.Element => {
  return (
    <div className="navigation">
      <Title />
      <div>menu</div>
      <div>other</div>
      <div>account</div>
    </div>
  )
}

export default Navigation
