import './style.less'
import React from 'react'

import { ReactComponent as SearchIcon } from '@/assets/icons/loupe.svg'

const Search = (): JSX.Element => {
  return (
    <div className="search-container">
      <div className="search-component">
        <input type="text" name="search" placeholder="Поиск" />
        <SearchIcon height={25} width={25} fill="white" stroke="white" strokeWidth={5} className="icon" />
      </div>
    </div>
  )
}

export default Search
