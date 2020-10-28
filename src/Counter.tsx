import React, {useState} from 'react'

type Props = {
}

const Counter = ({}: Props) => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  )
}

export default React.memo(Counter)
