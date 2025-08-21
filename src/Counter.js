import { useDispatch, useSelector } from 'react-redux';
import { amountBy, decrement, increment } from './slices/counterSlice';

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(decrement())}>-</button>
      {counter}
      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(amountBy(2))}>+2</button>

    </div>
  );
}

export default Counter;
