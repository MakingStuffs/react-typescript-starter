import React from 'react'

interface TitleProps {
  tag: keyof JSX.IntrinsicElements
  title: string
}

const Title: React.FC<TitleProps> = ({ tag, title }) => {
  const Tag = tag
  return <Tag>{title}</Tag>
}

export default Title
