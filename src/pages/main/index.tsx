import './style.less'
import React from 'react'

// Templates and components
import BurgerAndNotification from '@/templates/burgerAndNotification'
import Title from '@/components/title'
import Search from '@/components/search'
import TagLine from '@/templates/tagsLine'

const MainPage = (): JSX.Element => {
  return (
    <div className="container container-paddings">
      <BurgerAndNotification />
      <Title title="Привет, Виктор" description="Хороший день для поиска!" />
      <Search />
      <TagLine />
    </div>
  )
}

export default MainPage
