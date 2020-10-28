import React from 'react'
import {useCounter} from './useCounter'

type Props = {
  stepSize: number
}

const Counter = ({ stepSize }: Props) => {
  const { counter, increase, decrease } = useCounter(0, stepSize)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default React.memo(Counter)
