import React, {useState} from 'react'

type Props = {
}

const Counter = ({}: Props) => {
  const [counter, setCounter] = useState(0)

  const subtract = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }else {
      setCounter(0)
    }
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={subtract}>Decrease</button>
    </div>
  )
}

export default React.memo(Counter)
