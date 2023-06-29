// useDispatch() & useSelector() are used here in react-redux instead of getState() & dispatch() in redux

import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset } from "./actions/CounterActionCreators";

const App = () => {
      const counter = useSelector(state => state.a)
      const dispatch = useDispatch();

      return (
        <div>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch(increment(100))}>increment</button>
          <button onClick={() => dispatch(decrement(50))}>decrement</button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
      )
}

export default App
