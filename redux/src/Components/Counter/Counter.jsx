// import React from 'react'
import { useDispatch, useSelector } from "react-redux"
function Counter() {
   const dispatch = useDispatch()
  const counter =  useSelector(state => state.counter)
const incrementHandler =()=>{
dispatch({type: 'increment'})
}

const decrementHandler =()=>{
dispatch({type: 'decrement'})
}
  return (
    <div>
      <h1>Redux Counter</h1>
      <div>---Counter Value---</div>
      <div>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>{" "}
      <button onClick={() => dispatch({ type: "increment5" })}>
        IncrementBy5
      </button>{" "}
      <button onClick={decrementHandler}>Decrement</button>{" "}
      <button onClick={() => dispatch({ type: "decrement5" })}>
        DecrementBy5
      </button>{" "}
    </div>
  );
}

export default Counter