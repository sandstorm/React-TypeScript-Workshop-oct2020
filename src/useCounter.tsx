import {useState} from "react"

export const useCounter = (initalValue: number, stepSize: number) => {
  const [counter, setCounter] = useState(initalValue)

  const increase = () => setCounter(counter + stepSize)
  const decrease = () => counter >= stepSize
    ? setCounter(counter - stepSize)
    : setCounter(0)

  return {
    counter,
    increase,
    decrease
  }
}
