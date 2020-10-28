import React from 'react'

type Props = {
  children: React.ReactNode
}

const ComponentWithChildren = ({children}: Props) => {
  return (
    <div>
      <h1>Hallo Welt...</h1>
      {children}
    </div>
  )
}

export default React.memo(ComponentWithChildren)
