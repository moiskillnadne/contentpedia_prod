import './style.less'
import React from 'react'

// Components
import TagItem from '@/components/tag'

const TagsLine = (): JSX.Element => {
  return (
    <div className="tagsLine-container">
      <div className="tagsLine">
        <TagItem label="Последнее" />
      </div>
    </div>
  )
}

export default TagsLine
