import './style.less'
import React, { useRef } from 'react'

// Components
import TagItem from '@/components/tag'

interface ITag {
  label: string
  active: boolean
}

const fakeTags: Array<ITag> = [
  {
    label: 'последнее',
    active: true,
  },
  {
    label: 'чарт',
    active: false,
  },
  {
    label: 'вдудь',
    active: false,
  },
  {
    label: 'рекомендации',
    active: false,
  },
]

const TagsLine = (): JSX.Element => {
  const scrollLineRef = useRef(null)

  return (
    <div className="tagsLine-container">
      <div className="tagsLine" ref={scrollLineRef}>
        {fakeTags.map((tag: ITag) => {
          return <TagItem label={tag.label} active={tag.active} />
        })}
      </div>
    </div>
  )
}

export default TagsLine
