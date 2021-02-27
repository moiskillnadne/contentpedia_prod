import './style.less'
import React from 'react'

// Templates and components
import BurgerAndNotification from '@/templates/burgerAndNotification'
import Title from '@/components/title'

const MainPage = (): JSX.Element => {
  return (
    <div className="container container-paddings">
      <BurgerAndNotification />
      <Title title="Привет, Виктор" description="Хороший день для поиска!" />
      <div>search</div>
      <div>content</div>
    </div>
  )
}

export default MainPage
