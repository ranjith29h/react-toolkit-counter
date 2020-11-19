import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, inctementByFive, reset } from "../RTK";

export default function Counter() {
  const dispatch = useDispatch();

  let count = useSelector((state) => state);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={(e) => {
          dispatch(increment(1));
        }}
      >
        Increment
      </button>
      <button
        onClick={(e) => {
          dispatch(decrement(1));
        }}
      >
        Decrement
      </button>
      <button
        onClick={(e) => {
          dispatch(inctementByFive());
        }}
      >
        +5 Increment
      </button>
      <button
        onClick={(e) => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </>
  );
}
