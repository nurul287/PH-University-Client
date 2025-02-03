import { useDispatch } from "react-redux";
import { decrement, increment } from "../redux/feature/counter/counterSlice";
import { useAppSelector } from "../redux/hooks";

const Counter = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
