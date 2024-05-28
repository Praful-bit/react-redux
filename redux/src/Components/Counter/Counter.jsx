import { useDispatch, useSelector } from "react-redux";
import {counterAction} from '../../Store/index'

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);


  const incrementHandler = () => {
    dispatch(counterAction.increment())
  }

  const decrementHandler = () => {
    dispatch(counterAction.decrement())
  }

  const toggleHandle = () => {
    dispatch(counterAction.toggleCount())
  }
  
  const increaseHandle =()=>{
    dispatch(counterAction.increase(5))
  }

  const decreaseHandle =()=>{
    dispatch(counterAction.decrease(5))
  }

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>---Counter Value---</div>
      {toggle && <div>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>{" "}
      <button onClick={increaseHandle}>
        IncrementBy5
      </button>{" "}
      <button onClick={decrementHandler}>Decrement</button>{" "}
      <button onClick={decreaseHandle}>
        DecrementBy5
      </button>{" "}
      <button onClick={toggleHandle}>Toggle</button>
    </div>
  );
}

export default Counter;
