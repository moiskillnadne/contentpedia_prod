import './style.less'
import React, { FC } from 'react'

type TagItemProps = {
  label: string
}

const TagItem: FC<TagItemProps> = ({ label }): JSX.Element => {
  return (
    <div className="tag-container">
      <div className="tag-component">{label}</div>
    </div>
  )
}

export default TagItem
