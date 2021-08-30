import './style.less'
import React from 'react'

// Templates and components
import Navigation from '@/templates/navigation'

const MainPage = (): JSX.Element => {
  return (
    <div className="container container-paddings">
      <Navigation />
    </div>
  )
}

export default MainPage
