import './style.less'
import React, { FC } from 'react'

type TagItemProps = {
  label: string
  active?: boolean
}

const TagItem: FC<TagItemProps> = ({ label, active }): JSX.Element => {
  const formatedLabel = label.charAt(0).toUpperCase() + label.slice(1)

  return (
    <div className={active ? 'tag-container active-tag' : 'tag-container'}>
      <div className="tag-component">{formatedLabel}</div>
    </div>
  )
}

export default TagItem
