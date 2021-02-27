import './style.less'
import React, { FC } from 'react'

type TitleProps = {
  title: string
  description: string
}

const Title: FC<TitleProps> = ({ title, description }): JSX.Element => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Title
